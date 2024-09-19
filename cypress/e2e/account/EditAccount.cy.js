import ManagerPage from '../../support/pages/managerPage';
import EditAccountPage from '../../support/pages/account/editAccountPage';

describe('Edit Account Functionality', () => {
	const managerPage = new ManagerPage()
	const editAccountPage = new EditAccountPage()

	beforeEach(() => {
		cy.login()
	});

	it('should edit an existing account', () => {
		managerPage.navigateToEditAccount()
		editAccountPage.enterAccountId('54321')
		editAccountPage.submitEditAccountForm()
		editAccountPage.selectNewAccountType('Current')
		editAccountPage.submitChanges()
		editAccountPage.verifyAccountUpdatedSuccessfully()
	});

	it('should display an error for invalid account ID', () => {
		managerPage.navigateToEditAccount()
		editAccountPage.enterAccountId('12345')
		editAccountPage.submitEditAccountForm()
		editAccountPage.verifyAccountNotFound()
	});
});
