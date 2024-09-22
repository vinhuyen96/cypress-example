import ManagerPage from "../../support/pages/ManagerPage";
import ChangePasswordPage from "../../support/pages/change-password/ChangePasswordPage";
import { faker } from '@faker-js/faker';

describe('Change Password Functionality', () => {
	const managerPage = new ManagerPage()
	const changePasswordPage = new ChangePasswordPage()
	const newPass = faker.internet.password()
	const notMatchPass = faker.internet.password()
	beforeEach(() => {
		cy.login()
	});

	it('should change the password successfully', () => {
		menubar.navigateToChangePassword();
		cy.fixture('account.json').then((account) => {
			changePasswordPage.enterOldPassword(account.password)
		})
		changePasswordPage.enterNewPassword(newPass)
		changePasswordPage.confirmPassword(newPass)
		changePasswordPage.submitChangePassword()
		changePasswordPage.verifyPasswordChangeSuccess()
	});

	it('should show an error for mismatched passwords', () => {
		managerPage.navigateToChangePassword();
		cy.fixture('account.json').then((account) => {
			changePasswordPage.enterOldPassword(account.password)
		})
		changePasswordPage.enterNewPassword(newPass)
		changePasswordPage.confirmPassword(notMatchPass)
		changePasswordPage.submitChangePassword();
		changePasswordPage.verifyPasswordChangeFailure();
	});
});
