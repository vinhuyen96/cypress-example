class BalanceEnquiryPage {
	navigateToBalanceEnquiry() {
		cy.get('a[href="BalEnqInput.php"]').click();
	}

	enterAccountId(accountId) {
		cy.get('input[name="accountno"]').type(accountId);
	}

	submitBalanceEnquiryForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	verifyBalanceEnquirySuccessful() {
		cy.get('body').should('contain', 'Balance Details for Account');
	}

	verifyAccountNotFound() {
		cy.get('body').should('contain', 'Account does not exist');
	}
}

export default BalanceEnquiryPage;
