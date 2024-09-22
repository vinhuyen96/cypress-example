import ManagerPage from '../../support/pages/ManagerPage';
import DepositPage from '../../support/pages/deposit/DepositPage';
import { faker } from '@faker-js/faker';
import {customer} from "../../fixtures/customerData";

describe('Deposit Functionality', () => {
	const managerPage = new ManagerPage()
	const depositPage = new DepositPage()
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

	it('should perform a deposit successfully', () => {
		managerPage.navigateToDeposit()
		depositPage.enterAccountId(idAccount)
		depositPage.enterAmount(faker.number.int({min: 10000}))
		depositPage.enterDescription(faker.lorem.paragraph() )
		depositPage.submitDepositForm()
		depositPage.verifyDepositSuccessful()
	});

	it('should display an error for invalid account ID', () => {
		managerPage.navigateToDeposit()
		depositPage.enterAccountId(faker.number.int({min: 10000}))
		depositPage.submitDepositForm()
		depositPage.verifyAccountNotFound()
	});
});
