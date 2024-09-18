import LoginPage from '../support/pages/LoginPage';
import ManagerPage from '../support/pages/managerPage';
import CustomerPage from '../support/pages/customerPage';

describe('Customer Management', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const customerPage = new CustomerPage();

	beforeEach(() => {
		loginPage.navigate();  // Navigate to the login page before each test
		loginPage.enterUserId('mngr589401');
		loginPage.enterPassword('rupUqeg');
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should add a new customer', () => {
		managerPage.navigateToAddCustomer();

		// Fill in new customer details
		customerPage.enterCustomerName('John Doe');
		customerPage.enterDateOfBirth('1985-10-15');
		customerPage.enterAddress('123 Main St');
		customerPage.enterCity('New York');
		customerPage.enterState('NY');
		customerPage.enterPin('123456');
		customerPage.enterMobileNumber('1234567890');
		customerPage.enterEmail(`test${Date.now()}@gmail.com`);
		customerPage.enterPassword('test123');
		customerPage.submitNewCustomerForm();

		// Verify customer was added successfully
		customerPage.verifyCustomerAddedSuccessfully();
	});
});
