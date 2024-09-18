class DeleteCustomerPage {
	navigateToDeleteCustomer() {
		cy.get('a[href="DeleteCustomerInput.php"]').click();
	}

	enterCustomerId(customerId) {
		cy.get('input[name="cusid"]').type(customerId);
	}

	submitDeleteCustomerForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	confirmDeletion() {
		cy.on('window:confirm', (str) => {
			expect(str).to.eq('Do you really want to delete this Customer?');
			return true;
		});
	}

	verifyCustomerDeletedSuccessfully() {
		cy.get('body').should('contain', 'Customer deleted Successfully');
	}

	verifyCustomerNotFound() {
		cy.get('body').should('contain', 'Customer does not exist');
	}
}

export default DeleteCustomerPage;
