import LoginPage from '../../support/pages/LoginPage';
import ManagerPage from '../../support/pages/ManagerPage';
import FundTransferPage from '../../support/pages/fund-transfer/FundTransferPage';

describe('Fund Transfer Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const fundTransferPage = new FundTransferPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should perform a fund transfer successfully', () => {
		managerPage.navigateToFundTransfer();
		fundTransferPage.enterPayersAccountId('54321');
		fundTransferPage.enterPayeesAccountId('12345');
		fundTransferPage.enterAmount('200');
		fundTransferPage.enterDescription('Fun Test');
		fundTransferPage.submitFundTransferForm();
		fundTransferPage.verifyFundTransferSuccessful();
	});

	it('should display error for invalid payers account ID', () => {
		managerPage.navigateToFundTransfer();
		fundTransferPage.enterPayersAccountId('invalidId');
		fundTransferPage.enterPayeesAccountId('12345');
		fundTransferPage.enterAmount('200');
		fundTransferPage.submitFundTransferForm();
		fundTransferPage.verifyAccountNotFound();
	});
});
