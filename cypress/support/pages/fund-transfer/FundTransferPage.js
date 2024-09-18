class FundTransferPage {
	navigateToFundTransfer() {
		cy.get('a[href="FundTransInput.php"]').click();
	}

	enterPayersAccountId(accountId) {
		cy.get('input[name="payersaccount"]').type(accountId);
	}

	enterPayeesAccountId(accountId) {
		cy.get('input[name="payeeaccount"]').type(accountId);
	}

	enterAmount(amount) {
		cy.get('input[name="ammount"]').type(amount);
	}

	enterDescription(description) {
		cy.get('input[name="desc"]').type(description);
	}

	submitFundTransferForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	verifyFundTransferSuccessful() {
		cy.get('body').should('contain', 'Fund Transfer Details');
	}

	verifyAccountNotFound() {
		cy.get('body').should('contain', 'Account does not exist');
	}
}

export default FundTransferPage;
