import ManagerPage from '../../support/pages/ManagerPage';
import BalanceEnquiryPage from '../../support/pages/balance-enquiry/BalanceEnquiryPage';

describe('Balance Enquiry Functionality', () => {
	const managerPage = new ManagerPage()
	const balanceEnquiryPage = new BalanceEnquiryPage()

	beforeEach(() => {
		cy.login()
	});

	it('should perform a balance enquiry successfully', () => {
		managerPage.navigateToBalanceEnquiry()
		balanceEnquiryPage.enterAccountId('54321')
		balanceEnquiryPage.submitBalanceEnquiryForm()
		balanceEnquiryPage.verifyBalanceEnquirySuccessful()
	});

	it('should display an error for an invalid account ID', () => {
		managerPage.navigateToBalanceEnquiry()
		balanceEnquiryPage.enterAccountId('12398')
		balanceEnquiryPage.submitBalanceEnquiryForm()
		balanceEnquiryPage.verifyAccountNotFound()
	});
});
