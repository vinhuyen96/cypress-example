import ManagerPage from '../../support/pages/ManagerPage';
import EditCustomerPage from '../../support/pages/customer/EditCustomerPage';

import { faker } from '@faker-js/faker';

describe('Edit Customer Functionality', () => {
	const managerPage = new ManagerPage();
	const editCustomerPage = new EditCustomerPage();

	beforeEach(() => {
		cy.login()
	});

	it('should edit an existing customer', () => {
		managerPage.navigateToEditCustomer();
		editCustomerPage.enterCustomerId('12345');  // Need to be a dynamic Id - research save data after creating
		editCustomerPage.submitEditCustomerForm();
		editCustomerPage.editCustomerName(faker.person.firstName());
		editCustomerPage.submitChanges();
		editCustomerPage.verifyCustomerUpdatedSuccessfully();
	});

	it('should display an error for invalid customer ID', () => {
		managerPage.navigateToEditCustomer();
		editCustomerPage.enterCustomerId('1232');
		editCustomerPage.submitEditCustomerForm();
		editCustomerPage.verifyCustomerNotFound();
	});
});
