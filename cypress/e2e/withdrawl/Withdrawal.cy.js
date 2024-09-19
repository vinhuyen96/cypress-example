import { faker } from '@faker-js/faker';
import ManagerPage from '../../support/pages/ManagerPage';
import WithdrawalPage from '../../support/pages/withdrawl/WithdrawalPage';

describe('Withdrawal Functionality', () => {
	const managerPage = new ManagerPage();
	const withdrawalPage = new WithdrawalPage();

	beforeEach(() => {
		cy.login()
	});

	it('should perform a withdrawal successfully', () => {
		managerPage.navigateToWithdrawal()
		withdrawalPage.enterAccountId('54321')
		withdrawalPage.enterAmount(faker.number.int())
		withdrawalPage.enterDescription(faker.lorem.paragraph())
		withdrawalPage.submitWithdrawalForm()
		withdrawalPage.verifyWithdrawalSuccessful()
	});

	it('should display an error for invalid account ID', () => {
		managerPage.navigateToWithdrawal()
		withdrawalPage.enterAccountId('4323')
		withdrawalPage.submitWithdrawalForm()
		withdrawalPage.verifyAccountNotFound()
	});
});
