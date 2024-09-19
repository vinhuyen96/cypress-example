import ManagerPage from '../../support/pages/ManagerPage';
import DeleteCustomerPage from '../../support/pages/customer/DeleteCustomerPage';


describe('Delete Customer Functionality', () => {
	const managerPage = new ManagerPage();
	const deleteCustomerPage = new DeleteCustomerPage();

	beforeEach(() => {
		cy.login()
	});

	it('should delete a customer successfully', () => {
		managerPage.navigateToDeleteCustomer()
		deleteCustomerPage.enterCustomerId('12345')
		deleteCustomerPage.submitDeleteCustomerForm()
		deleteCustomerPage.confirmDeletion()
		deleteCustomerPage.verifyCustomerDeletedSuccessfully()
	});

	it('should display error for invalid customer ID', () => {
		managerPage.navigateToDeleteCustomer()
		deleteCustomerPage.enterCustomerId('4324344')
		deleteCustomerPage.submitDeleteCustomerForm()
		deleteCustomerPage.verifyCustomerNotFound()
	});
});
