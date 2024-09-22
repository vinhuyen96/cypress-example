import ManagerPage from '../../support/pages/managerPage';
import EditAccountPage from '../../support/pages/account/editAccountPage';
import {customer} from "../../fixtures/customerData";

describe('Edit Account Functionality', () => {
	const managerPage = new ManagerPage()
	const editAccountPage = new EditAccountPage()
	let idAccount = ""

	beforeEach(() => {
		cy.login()
		// it will fill with correct api
		it('should create a customer using API', () => {
			cy.request({
				method: 'POST',
				url: 'https://demo.guru99.com/V4/customer/createAccount',
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
				idAccount = response?.data?.idAccount
			});
		});
	})

	it('should edit an existing account', () => {
		managerPage.navigateToEditAccount()
		editAccountPage.enterAccountId(idAccount)
		editAccountPage.submitEditAccountForm()
		editAccountPage.selectNewAccountType('Current')
		editAccountPage.submitChanges()
		editAccountPage.verifyAccountUpdatedSuccessfully()
	});

	it('should display an error for invalid account ID', () => {
		managerPage.navigateToEditAccount()
		editAccountPage.enterAccountId(idAccount)
		editAccountPage.submitEditAccountForm()
		editAccountPage.verifyAccountNotFound()
	});
});
