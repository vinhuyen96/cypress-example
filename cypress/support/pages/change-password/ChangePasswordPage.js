import BasePage from "../BasePage";

class ChangePasswordPage extends BasePage {
	constructor() {
		super();
		this.changePasswordLink = 'a[href="PasswordInput.php"]';
		this.oldPasswordField = 'input[name="oldpassword"]';
		this.newPasswordField = 'input[name="newpassword"]';
		this.confirmPasswordField = 'input[name="confirmpassword"]';
		this.submitBtn = 'input[name="btnLogin"]';
	}

	navigateToChangePassword() {
		this.clickElement(this.changePasswordLink);
	}

	enterOldPassword(oldPassword) {
		this.typeInInput(this.oldPasswordField, oldPassword);
	}

	enterNewPassword(newPassword) {
		this.typeInInput(this.newPasswordField, newPassword);
	}

	confirmPassword(confirmPassword) {
		this.typeInInput(this.confirmPasswordField, confirmPassword);
	}

	submitChangePassword() {
		this.clickElement(this.submitBtn);
	}

	verifyPasswordChangeSuccess() {
		this.verifyTextInBody('Password is Changed');
	}

	verifyPasswordChangeFailure() {
		this.verifyTextInBody('Password Change Failed');
	}
}

export default ChangePasswordPage;
