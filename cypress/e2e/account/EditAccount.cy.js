import LoginPage from '../../support/pages/loginPage';
import ManagerPage from '../../support/pages/managerPage';
import EditAccountPage from '../../support/pages/account/editAccountPage';

describe('Edit Account Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const editAccountPage = new EditAccountPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should edit an existing account', () => {
		managerPage.navigateToEditAccount();
		editAccountPage.enterAccountId('54321');  // Replace with valid Account ID
		editAccountPage.submitEditAccountForm();
		editAccountPage.selectNewAccountType('Current');
		editAccountPage.submitChanges();
		editAccountPage.verifyAccountUpdatedSuccessfully();
	});

	it('should display an error for invalid account ID', () => {
		managerPage.navigateToEditAccount();
		editAccountPage.enterAccountId('invalidId');
		editAccountPage.submitEditAccountForm();
		editAccountPage.verifyAccountNotFound();
	});
});
