class DepositPage {
	navigateToDeposit() {
		cy.get('a[href="DepositInput.php"]').click();
	}

	enterAccountId(accountId) {
		cy.get('input[name="accountno"]').type(accountId);
	}

	enterAmount(amount) {
		cy.get('input[name="ammount"]').type(amount);
	}

	enterDescription(description) {
		cy.get('input[name="desc"]').type(description);
	}

	submitDepositForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	verifyDepositSuccessful() {
		cy.get('body').should('contain', 'Transaction details of Deposit for Account');
	}

	verifyAccountNotFound() {
		cy.get('body').should('contain', 'Account does not exist');
	}
}

export default DepositPage;
