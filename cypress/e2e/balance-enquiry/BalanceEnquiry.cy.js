import LoginPage from '../../support/pages/LoginPage';
import ManagerPage from '../../support/pages/ManagerPage';
import BalanceEnquiryPage from '../../support/pages/balance-enquiry/BalanceEnquiryPage';

describe('Balance Enquiry Functionality', () => {
	const loginPage = new LoginPage();
	const managerPage = new ManagerPage();
	const balanceEnquiryPage = new BalanceEnquiryPage();

	beforeEach(() => {
		loginPage.navigate();
		cy.fixture('account.json').then((account) => {
			loginPage.enterUserId(account.userId);
			loginPage.enterPassword(account.password);
		});
		loginPage.clickLogin();
		loginPage.verifyLoginSuccess();
	});

	it('should perform a balance enquiry successfully', () => {
		managerPage.navigateToBalanceEnquiry();
		balanceEnquiryPage.enterAccountId('54321');  // Replace with valid Account ID
		balanceEnquiryPage.submitBalanceEnquiryForm();
		balanceEnquiryPage.verifyBalanceEnquirySuccessful();
	});

	it('should display an error for an invalid account ID', () => {
		managerPage.navigateToBalanceEnquiry();
		balanceEnquiryPage.enterAccountId('invalidId');
		balanceEnquiryPage.submitBalanceEnquiryForm();
		balanceEnquiryPage.verifyAccountNotFound();
	});
});
