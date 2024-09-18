class CustomerPage {
	enterCustomerName(name) {
		cy.get('input[name="name"]').type(name);
	}

	pickCustomerGender() {
		cy.get('[type="radio"]').first().check()
	}

	enterDateOfBirth(dob) {
		cy.get('[type="date"]').type(dob);
	}

	enterAddress(address) {
		cy.get('textarea[name=addr]').type(address);
	}

	enterCity(city) {
		cy.get('input[name=city]').type(city);
	}

	enterState(state) {
		cy.get('input[name=state]').type(state);
	}

	enterPin(pin) {
		cy.get('input[name=pinno]').type(pin);
	}

	enterMobileNumber(mobile) {
		cy.get('input[name=telephoneno]').type(mobile);
	}

	enterEmail(email) {
		cy.get('input[name=emailid]').type(email);
	}

	enterPassword(password) {
		cy.get('input[name=password"').type(password);
	}

	submitNewCustomerForm() {
		cy.get('[type=submit]').click()
	}

	verifyCustomerAddedSuccessfully() {
		cy.get('body').should('contain', 'Customer Registered Successfully!!!');
	}
}

export default CustomerPage;
