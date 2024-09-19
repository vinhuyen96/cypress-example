import ManagerPage from '../../support/pages/managerPage';
import NewAccountPage from '../../support/pages/account/newAccountPage';

describe('New Account Functionality', () => {
	const managerPage = new ManagerPage()
	const newAccountPage = new NewAccountPage()

	beforeEach(() => {
		cy.login()
	});

	it('should create a new account successfully', () => {
		managerPage.navigateToAddNewAccount()
		newAccountPage.enterCustomerId('12345')  // Dynamic data please :)
		newAccountPage.selectAccountType('Savings')
		newAccountPage.enterInitialDeposit('1000')
		newAccountPage.submitNewAccountForm()
		newAccountPage.verifyAccountCreatedSuccessfully()
	});

	it('should display error for invalid customer ID', () => {
		managerPage.navigateToEditAccount()
		newAccountPage.enterCustomerId('12345')
		newAccountPage.submitNewAccountForm()
		newAccountPage.verifyErrorForInvalidCustomerId()
	});
});
