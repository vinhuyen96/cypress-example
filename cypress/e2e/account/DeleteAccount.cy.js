import LoginPage from '../../support/pages/loginPage';
import ManagerPage from '../../support/pages/managerPage';
import DeleteAccountPage from '../../support/pages/account/deleteAccountPage';

describe('Delete Account Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const deleteAccountPage = new DeleteAccountPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should delete an account successfully', () => {
		managerPage.navigateToDeleteAccount();
		deleteAccountPage.enterAccountId('54321');  // Replace with valid Account ID
		deleteAccountPage.submitDeleteAccountForm();
		deleteAccountPage.confirmDeletion();
		deleteAccountPage.verifyAccountDeletedSuccessfully();
	});

	it('should display error for invalid account ID', () => {
		managerPage.navigateToDeleteAccount();
		deleteAccountPage.enterAccountId('invalidId');
		deleteAccountPage.submitDeleteAccountForm();
		deleteAccountPage.verifyAccountNotFound();
	});
});
