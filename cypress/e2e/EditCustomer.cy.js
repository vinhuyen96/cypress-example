import LoginPage from '../support/pages/loginPage';
import ManagerPage from '../support/pages/managerPage';
import EditCustomerPage from '../support/pages/editCustomerPage';

describe('Edit Customer Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const editCustomerPage = new EditCustomerPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should edit an existing customer', () => {
		managerPage.navigateToEditCustomer();
		editCustomerPage.enterCustomerId('12345');  // Replace with valid Customer ID
		editCustomerPage.submitEditCustomerForm();
		editCustomerPage.editCustomerName('John Updated');
		editCustomerPage.submitChanges();
		editCustomerPage.verifyCustomerUpdatedSuccessfully();
	});

	it('should display an error for invalid customer ID', () => {
		managerPage.navigateToEditCustomer();
		editCustomerPage.enterCustomerId('invalidId');
		editCustomerPage.submitEditCustomerForm();
		editCustomerPage.verifyCustomerNotFound();
	});
});
