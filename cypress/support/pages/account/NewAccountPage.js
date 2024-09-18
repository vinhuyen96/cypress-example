class NewAccountPage {
	navigateToAddNewAccount() {
		cy.get('a[href="addAccount.php"]').click();
	}

	enterCustomerId(customerId) {
		cy.get('input[name="cusid"]').type(customerId);
	}

	selectAccountType(accountType) {
		cy.get('select[name="selaccount"]').select(accountType);
	}

	enterInitialDeposit(deposit) {
		cy.get('input[name="inideposit"]').type(deposit);
	}

	submitNewAccountForm() {
		cy.get('input[name="button2"]').click();
	}

	verifyAccountCreatedSuccessfully() {
		cy.get('body').should('contain', 'Account Generated Successfully!!!');
	}

	verifyErrorForInvalidCustomerId() {
		cy.get('body').should('contain', 'Customer does not exist');
	}
}

export default NewAccountPage;
