import BasePage from "../BasePage";

class CustomerPage extends BasePage {
	constructor() {
		super()
		this.customerNameField = 'input[name="name"]'
		this.customerGenderField = '[type="radio"]'
		this.customerDOBField = '[type="date"]'
		this.customerAddressField = 'textarea[name=addr]'
		this.customerCityField = 'input[name=city]'
		this.customerStateField = 'input[name=state]'
		this.customerPinField = 'input[name=pinno]'
		this.customerPhoneNumberField = 'input[name=telephoneno]'
		this.customerEmailField = 'input[name=emailid]'
		this.customerPasswordField = 'input[name=password]'
		this.submitButton = '[type=submit]'
	}
	enterCustomerName(name) {
		this.typeInInput(this.customerNameField, name)
	}

	pickCustomerGender() {
		cy.get(this.customerGenderField).first().check()
	}

	enterDateOfBirth(dob) {
		this.typeInInput(this.customerDOBField, dob)
	}

	enterAddress(address) {
		this.typeInInput(this.customerAddressField, address)
	}

	enterCity(city) {
		this.typeInInput(this.customerCityField, city)
	}

	enterState(state) {
		this.typeInInput(this.customerStateField, state)
	}

	enterPin(pin) {
		this.typeInInput(this.customerPinField, pin)
	}

	enterMobileNumber(mobile) {
		this.typeInInput(this.customerPhoneNumberField, mobile)
	}

	enterEmail(email) {
		this.typeInInput(this.customerEmailField, email)
	}

	enterPassword(password) {
		this.typeInInput(this.customerPasswordField, password)
	}

	submitNewCustomerForm() {
		this.clickElement(this.submitButton)
	}

	verifyCustomerAddedSuccessfully() {
		cy.get('body').should('contain', 'Customer Registered Successfully!!!');
	}
}

export default CustomerPage;
