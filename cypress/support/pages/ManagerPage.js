class ManagerPage {
	verifyDashboardElements() {
		// Check that key elements are visible on the Manager dashboard
		cy.get('a[href="addcustomerpage.php"]').should('exist');
		cy.get('a[href="EditCustomer.php"]').should('exist');
		cy.get('a[href="DeleteCustomerInput.php"]').should('exist');
		cy.get('a[href="addAccount.php"]').should('exist');
		cy.get('a[href="editAccount.php"]').should('exist');
		cy.get('a[href="deleteAccountInput.php"]').should('exist');
	}

	navigateToAddCustomer() {
		cy.get('a[href="addcustomerpage.php"]').click();
	}
	navigateToEditCustomer() {
		cy.get('a[href="EditCustomer.php"]').click();
	}
	navigateToDeleteCustomer() {
		cy.get('a[href="DeleteCustomerInput.php"]').click();
	}
	navigateToAddNewAccount() {
		cy.get('a[href="addAccount.php"]').click();
	}
	navigateToEditAccount() {
		cy.get('a[href="editAccount.php"]').click();
	}
	navigateToDeleteAccount() {
		cy.get('a[href="DeleteCustomerInput.php"]').click();
	}
}

export default ManagerPage;
