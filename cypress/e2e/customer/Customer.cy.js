import ManagerPage from '../../support/pages/ManagerPage';
import CustomerPage from '../../support/pages/customer/CustomerPage';
import {customer} from "../../fixtures/customerData";

describe('Customer Management', () => {
	const managerPage = new ManagerPage();
	const customerPage = new CustomerPage();

	beforeEach(() => {
		cy.login()
	});

	it('Add a new customer', () => {
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
