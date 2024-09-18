class DeleteAccountPage {
	navigateToDeleteAccount() {
		cy.get('a[href="deleteAccountInput.php"]').click();
	}

	enterAccountId(accountId) {
		cy.get('input[name="accountno"]').type(accountId);
	}

	submitDeleteAccountForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	confirmDeletion() {
		cy.on('window:confirm', (str) => {
			expect(str).to.eq('Do you really want to delete this Account?');
			return true;
		});
	}

	verifyAccountDeletedSuccessfully() {
		cy.get('body').should('contain', 'Account Deleted Sucessfully');
	}

	verifyAccountNotFound() {
		cy.get('body').should('contain', 'Account does not exist');
	}
}

export default DeleteAccountPage;
