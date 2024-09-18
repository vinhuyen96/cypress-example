import LoginPage from '../support/pages/loginPage';
import ManagerPage from '../support/pages/managerPage';

describe('Login Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();

	beforeEach(() => {
		loginPage.navigate();  // Navigate to the login page before each test
	});

	it('should log in with valid credentials', () => {
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
		managerPage.verifyDashboardElements();
	});

	it('should not log in with invalid credentials', () => {
		loginPage.enterUserId('invalidUser');
		loginPage.enterPassword('invalidPass');
		loginPage.clickLogin();
		loginPage.verifyLoginFailure();
	});
});
