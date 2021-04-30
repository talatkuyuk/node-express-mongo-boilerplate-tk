const express = require('express');

const { authController } = require('../controllers');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');

const { 
	signupValidationRules, 
	loginValidationRules,
	logoutValidationRules,
	signoutValidationRules,
	refreshTokensValidationRules,
	changePasswordValidationRules,
	forgotPasswordValidationRules,
	resetPasswordValidationRules,
	verifyEmailValidationRules } = require('../validations/authValidationRules');

const router = express.Router();

router.post('/signup', validate(signupValidationRules), authController.signup);
router.post('/login', validate(loginValidationRules), authController.login);
router.post('/logout', validate(logoutValidationRules), authController.logout);
router.post('/signout', auth(), validate(signoutValidationRules), authController.signout);
router.post('/refresh-tokens', validate(refreshTokensValidationRules), authController.refreshTokens);
router.post('/change-password', auth("change-password"), validate(changePasswordValidationRules), authController.changePassword);
router.post('/forgot-password', validate(forgotPasswordValidationRules), authController.forgotPassword);
router.post('/reset-password', validate(resetPasswordValidationRules), authController.resetPassword);
router.post('/verify-email', validate(verifyEmailValidationRules), authController.verifyEmail);
router.post('/send-verification-email', auth(), authController.sendVerificationEmail);

module.exports = router;
