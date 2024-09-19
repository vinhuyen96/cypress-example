import BasePage from "./BasePage";

class ManagerPage extends BasePage{
	constructor() {
		super()
		this.newCustomerLink = 'a[href="addcustomerpage.php"]'
		this.editCustomerLink = 'a[href="EditCustomer.php"]'
		this.deleteCustomerLink = 'a[href="DeleteCustomerInput.php"]'
		this.newAccountLink = 'a[href="addAccount.php"]'
		this.editAccountLink = 'a[href="editAccount.php"]'
		this.deleteAccountLink = 'a[href="deleteAccountInput.php"]'
		this.depositLink = 'a[href="DepositInput.php"]'
		this.balanceEnquiryLink = 'a[href="BalEngInput.php"]'
		this.withdrawalLink = 'a[href="WithdrawalInput.php"]'
		this.fundTransferLink = 'a[href="FundTransInput.php"]'
	}

	verifyDashboardElements() {
		// Check that key elements are visible on the Manager dashboard
		cy.get(this.newCustomerLink).should('exist')
		cy.get(this.editCustomerLink).should('exist')
		cy.get(this.deleteCustomerLink).should('exist')
		cy.get(this.newAccountLink).should('exist')
		cy.get(this.editAccountLink).should('exist')
		cy.get(this.deleteAccountLink).should('exist')
		cy.get(this.depositLink).should('exist')
		cy.get(this.balanceEnquiryLink).should('exist')
		cy.get(this.withdrawalLink).should('exist')
		cy.get(this.fundTransferLink).should('exist')
	}

	navigateToAddCustomer() {
		this.clickElement(this.newCustomerLink)
	}
	navigateToEditCustomer() {
		this.clickElement(this.editCustomerLink)
	}
	navigateToDeleteCustomer() {
		this.clickElement(this.deleteCustomerLink)
	}
	navigateToAddNewAccount() {
		this.clickElement(this.newAccountLink)
	}
	navigateToEditAccount() {
		this.clickElement(this.editAccountLink)
	}
	navigateToDeleteAccount() {
		this.clickElement(this.deleteCustomerLink)
	}
	navigateToDeposit() {
		this.clickElement(this.depositLink)
	}
	navigateToBalanceEnquiry() {
		this.clickElement(this.balanceEnquiryLink)
	}
	navigateToWithdrawal() {
		this.clickElement(this.withdrawalLink)
	}
	navigateToFundTransfer() {
		this.clickElement(this.fundTransferLink)
	}
}

export default ManagerPage;
