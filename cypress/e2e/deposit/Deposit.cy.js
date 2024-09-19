import ManagerPage from '../../support/pages/ManagerPage';
import DepositPage from '../../support/pages/deposit/DepositPage';
import { faker } from '@faker-js/faker';

describe('Deposit Functionality', () => {
	const managerPage = new ManagerPage()
	const depositPage = new DepositPage()

	beforeEach(() => {
		cy.login()
	});

	it('should perform a deposit successfully', () => {
		managerPage.navigateToDeposit()
		depositPage.enterAccountId('54321')
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
