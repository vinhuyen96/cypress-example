import ManagerPage from '../../support/pages/managerPage';
import DeleteAccountPage from '../../support/pages/account/deleteAccountPage';
import {customer} from "../../fixtures/customerData";

describe('Delete Account Functionality', () => {
	const managerPage = new ManagerPage();
	const deleteAccountPage = new DeleteAccountPage();
	let idAccount = ""

	beforeEach(() => {
		cy.login()
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
	});

	it('should delete an account successfully', () => {
		managerPage.navigateToDeleteAccount()
		deleteAccountPage.enterAccountId('54321')
		deleteAccountPage.submitDeleteAccountForm()
		deleteAccountPage.confirmDeletion()
		deleteAccountPage.verifyAccountDeletedSuccessfully()
	});

	it('should display error for invalid account ID', () => {
		managerPage.navigateToDeleteAccount()
		deleteAccountPage.enterAccountId('657567456')
		deleteAccountPage.submitDeleteAccountForm()
		deleteAccountPage.verifyAccountNotFound()
	});
});
