class WithdrawalPage {
	navigateToWithdrawal() {
		cy.get('a[href="WithdrawalInput.php"]').click();
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

	submitWithdrawalForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	verifyWithdrawalSuccessful() {
		cy.get('body').should('contain', 'Transaction details of Withdrawal for Account');
	}

	verifyAccountNotFound() {
		cy.get('body').should('contain', 'Account does not exist');
	}
}

export default WithdrawalPage;
