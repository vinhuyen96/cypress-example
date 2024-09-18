import LoginPage from '../support/pages/loginPage';
import ManagerPage from '../support/pages/managerPage';
import DeleteCustomerPage from '../support/pages/deleteCustomerPage';


describe('Delete Customer Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const deleteCustomerPage = new DeleteCustomerPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should delete a customer successfully', () => {
		managerPage.navigateToDeleteCustomer();
		deleteCustomerPage.enterCustomerId('12345');
		deleteCustomerPage.submitDeleteCustomerForm();
		deleteCustomerPage.confirmDeletion();
		deleteCustomerPage.verifyCustomerDeletedSuccessfully();
	});

	it('should display error for invalid customer ID', () => {
		managerPage.navigateToDeleteCustomer();
		deleteCustomerPage.enterCustomerId('4324344');
		deleteCustomerPage.submitDeleteCustomerForm();
		deleteCustomerPage.verifyCustomerNotFound();
	});
});
