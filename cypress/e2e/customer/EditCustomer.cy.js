import ManagerPage from '../../support/pages/ManagerPage';
import EditCustomerPage from '../../support/pages/customer/EditCustomerPage';

import { faker } from '@faker-js/faker';
import {customer} from "../../fixtures/customerData";

describe('Edit Customer Functionality', () => {
	const managerPage = new ManagerPage();
	const editCustomerPage = new EditCustomerPage();
	let customerId = ""

	beforeEach(() => {
		cy.login()
		it('should create a customer using API', () => {
			cy.request({
				method: 'POST',
				url: 'https://demo.guru99.com/V4/customer/createCustomer',
				form: true,
				body: {
					name: customer.name,
					dob: customer.dob,
					address: customer.address,
					city: customer.city,
					state: customer.state,
					pin: customer.pin,
					mobile: customer.mobile,
					email: customer.email,
					password: customer.password
				}
			}).then((response) => {
				expect(response.status).to.eq(200);
				customerId = response?.data?.customerId
			});
		});
	});

	it('should edit an existing customer', () => {
		managerPage.navigateToEditCustomer();
		editCustomerPage.enterCustomerId(customerId);  // Need to be a dynamic Id - research save data after creating
		editCustomerPage.submitEditCustomerForm();
		editCustomerPage.editCustomerName(faker.person.firstName());
		editCustomerPage.submitChanges();
		editCustomerPage.verifyCustomerUpdatedSuccessfully();
	});

	it('should display an error for invalid customer ID', () => {
		managerPage.navigateToEditCustomer();
		editCustomerPage.enterCustomerId(customerId);
		editCustomerPage.submitEditCustomerForm();
		editCustomerPage.verifyCustomerNotFound();
	});
});
