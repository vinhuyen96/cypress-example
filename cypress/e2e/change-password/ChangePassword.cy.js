import ManagerPage from "../../support/pages/ManagerPage";
import ChangePasswordPage from "../../support/pages/change-password/ChangePasswordPage";

describe('Change Password Functionality', () => {
	const managerPage = new ManagerPage()
	const changePasswordPage = new ChangePasswordPage()

	beforeEach(() => {
		cy.login()
	});

	it('should change the password successfully', () => {
		menubar.navigateToChangePassword();
		cy.fixture('account.json').then((account) => {
			changePasswordPage.enterOldPassword(account.password)
		})
		changePasswordPage.enterNewPassword('newPassword123')
		changePasswordPage.confirmPassword('newPassword123')
		changePasswordPage.submitChangePassword()
		changePasswordPage.verifyPasswordChangeSuccess()
	});

	it('should show an error for mismatched passwords', () => {
		managerPage.navigateToChangePassword();
		cy.fixture('account.json').then((account) => {
			changePasswordPage.enterOldPassword(account.password)
		})
		changePasswordPage.enterNewPassword('newPassword123')
		changePasswordPage.confirmPassword('differentPassword123')
		changePasswordPage.submitChangePassword();
		changePasswordPage.verifyPasswordChangeFailure();
	});
});
