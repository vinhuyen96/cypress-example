import ManagerPage from '../../support/pages/managerPage';
import DeleteAccountPage from '../../support/pages/account/deleteAccountPage';

describe('Delete Account Functionality', () => {
	const managerPage = new ManagerPage();
	const deleteAccountPage = new DeleteAccountPage();

	beforeEach(() => {
		cy.login()
	});

	it('should delete an account successfully', () => {
		managerPage.navigateToDeleteAccount()
		deleteAccountPage.enterAccountId('54321')
		deleteAccountPage.submitDeleteAccountForm()
		deleteAccountPage.confirmDeletion()
		deleteAccountPage.verifyAccountDeletedSuccessfully()
	});

	it('should display error for invalid account ID', () => {
		managerPage.navigateToDeleteAccount()
		deleteAccountPage.enterAccountId('657567456')
		deleteAccountPage.submitDeleteAccountForm()
		deleteAccountPage.verifyAccountNotFound()
	});
});
