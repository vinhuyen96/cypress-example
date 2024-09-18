import LoginPage from '../support/pages/LoginPage';
import ManagerPage from '../support/pages/managerPage';
import CustomerPage from '../support/pages/customerPage';
import {customer} from "../fixtures/customerData";

describe('Customer Management', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const customerPage = new CustomerPage();

	beforeEach(() => {
		//navigate
		loginPage.navigate();

		// read file account.json
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should add a new customer', () => {
		managerPage.navigateToAddCustomer();

		// Fill in new customer details
		customerPage.enterCustomerName(customer.name);
		customerPage.enterDateOfBirth(customer.dob);
		customerPage.pickCustomerGender()
		customerPage.enterAddress(customer.address);
		customerPage.enterCity(customer.city);
		customerPage.enterState(customer.state);
		customerPage.enterPin(customer.pin);
		customerPage.enterMobileNumber(customer.mobile);
		customerPage.enterEmail(customer.email);
		customerPage.enterPassword(customer.password);
		customerPage.submitNewCustomerForm();

		// Verify customer was added successfully
		customerPage.verifyCustomerAddedSuccessfully();
	});
});
