import LoginPage from '../../support/pages/loginPage';
import ManagerPage from '../../support/pages/managerPage';
import NewAccountPage from '../../support/pages/account/newAccountPage';

describe('New Account Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const newAccountPage = new NewAccountPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should create a new account successfully', () => {
		managerPage.navigateToAddNewAccount();
		newAccountPage.enterCustomerId('12345');  // Replace with valid Customer ID
		newAccountPage.selectAccountType('Savings');
		newAccountPage.enterInitialDeposit('1000');
		newAccountPage.submitNewAccountForm();
		newAccountPage.verifyAccountCreatedSuccessfully();
	});

	it('should display error for invalid customer ID', () => {
		managerPage.navigateToEditAccount();
		newAccountPage.enterCustomerId('invalidId');
		newAccountPage.submitNewAccountForm();
		newAccountPage.verifyErrorForInvalidCustomerId();
	});
});
