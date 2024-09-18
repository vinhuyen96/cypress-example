class EditCustomerPage {
	navigateToEditCustomer() {
		cy.get('a[href="EditCustomer.php"]').click();
	}

	enterCustomerId(customerId) {
		cy.get('input[name="cusid"]').type(customerId);
	}

	submitEditCustomerForm() {
		cy.get('input[name="AccSubmit"]').click();
	}

	editCustomerName(name) {
		cy.get('input[name="name"]').clear().type(name);
	}

	submitChanges() {
		cy.get('input[name="sub"]').click();
	}

	verifyCustomerUpdatedSuccessfully() {
		cy.get('body').should('contain', 'Customer details updated Successfully');
	}

	verifyCustomerNotFound() {
		cy.get('body').should('contain', 'Customer does not exist');
	}
}

export default EditCustomerPage;
