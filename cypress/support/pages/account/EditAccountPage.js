class EditAccountPage {
	navigateToEditAccount() {
		cy.get('a[href="editAccount.php"]').click();
	}

	enterAccountId(accountId) {
		cy.get('input[name="accountno"]').type(accountId);
	}

	submitEditAccountForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	selectNewAccountType(accountType) {
		cy.get('select[name="a_type"]').select(accountType);
	}

	submitChanges() {
		cy.get('input[name="button2"]').click();
	}

	verifyAccountUpdatedSuccessfully() {
		cy.get('body').should('contain', 'Account details updated Successfully');
	}

	verifyAccountNotFound() {
		cy.get('body').should('contain', 'Account does not exist');
	}
}

export default EditAccountPage;
