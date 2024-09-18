import LoginPage from '../../support/pages/LoginPage';
import ManagerPage from '../../support/pages/ManagerPage';
import WithdrawalPage from '../../support/pages/withdrawl/WithdrawalPage';

describe('Withdrawal Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const withdrawalPage = new WithdrawalPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should perform a withdrawal successfully', () => {
		managerPage.navigateToWithdrawal();
		withdrawalPage.enterAccountId('54321');
		withdrawalPage.enterAmount('500');
		withdrawalPage.enterDescription('Withdrawal Test');
		withdrawalPage.submitWithdrawalForm();
		withdrawalPage.verifyWithdrawalSuccessful();
	});

	it('should display an error for invalid account ID', () => {
		managerPage.navigateToWithdrawal();
		withdrawalPage.enterAccountId('invalidId');
		withdrawalPage.submitWithdrawalForm();
		withdrawalPage.verifyAccountNotFound();
	});
});
