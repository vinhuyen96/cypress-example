import ManagerPage from "../../support/pages/ManagerPage";
import LogoutPage from "../../support/pages/auth/LogoutPage";

describe('Logout Functionality', () => {
	const managerPage = new ManagerPage()
	const logoutPage = new LogoutPage()

	beforeEach(() => {
		cy.login()
	});

	it('should log out successfully', () => {
		managerPage.navigateToLogout()
		logoutPage.logout()
		logoutPage.verifyLogoutSuccess()
	});
});
