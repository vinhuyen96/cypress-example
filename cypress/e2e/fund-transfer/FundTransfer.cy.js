import { faker } from '@faker-js/faker';
import ManagerPage from '../../support/pages/ManagerPage';
import FundTransferPage from '../../support/pages/fund-transfer/FundTransferPage';

describe('Fund Transfer Functionality', () => {
	const managerPage = new ManagerPage()
	const fundTransferPage = new FundTransferPage()

	beforeEach(() => {
		cy.login()
	});

	it('should perform a fund transfer successfully', () => {
		managerPage.navigateToFundTransfer()
		fundTransferPage.enterPayersAccountId('54321')
		fundTransferPage.enterPayeesAccountId('12345')
		fundTransferPage.enterAmount(faker.number.int())
		fundTransferPage.enterDescription(faker.lorem.lines())
		fundTransferPage.submitFundTransferForm()
		fundTransferPage.verifyFundTransferSuccessful()
	});

	it('should display error for invalid payers account ID', () => {
		managerPage.navigateToFundTransfer();
		fundTransferPage.enterPayersAccountId('12323')
		fundTransferPage.enterPayeesAccountId('12345')
		fundTransferPage.enterAmount(faker.number.int())
		fundTransferPage.submitFundTransferForm();
		fundTransferPage.verifyPayeeNotFound();
	});
});
