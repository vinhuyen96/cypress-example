import ManagerPage from '../../support/pages/ManagerPage';
import DeleteCustomerPage from '../../support/pages/customer/DeleteCustomerPage';
import {customer} from "../../fixtures/customerData";


describe('Delete Customer Functionality', () => {
	const managerPage = new ManagerPage();
	const deleteCustomerPage = new DeleteCustomerPage();
	let customerId = ""

	beforeEach(() => {
		cy.login()
		// it will fill with correct api
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

	it('should delete a customer successfully', () => {
		managerPage.navigateToDeleteCustomer()
		deleteCustomerPage.enterCustomerId(customerId)
		deleteCustomerPage.submitDeleteCustomerForm()
		deleteCustomerPage.confirmDeletion()
		deleteCustomerPage.verifyCustomerDeletedSuccessfully()
	});

	it('should display error for invalid customer ID', () => {
		managerPage.navigateToDeleteCustomer()
		deleteCustomerPage.enterCustomerId(customerId)
		deleteCustomerPage.submitDeleteCustomerForm()
		deleteCustomerPage.verifyCustomerNotFound()
	});
});
