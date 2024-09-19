import BasePage from "../BasePage";

class EditCustomerPage extends BasePage{
	constructor() {
		super()
		this.customerIdField = 'input[name="cusid"]'
		this.submitToGoCustomerEditBtn = 'input[name="AccSubmit"]'
		this.customerNameField = 'input[name="name"]'
		this.submitUpdateCustomerForm = 'input[name="sub"]'
		this.updatedSuccessfullyMessage = 'Customer details updated Successfully'
		this.customerNotFoundMessage = 'Customer does not exist'
	}

	enterCustomerId(customerId) {
		this.typeInInput(this.customerIdField, customerId)
	}

	submitEditCustomerForm() {
		this.clickElement(this.submitToGoCustomerEditBtn)
	}

	editCustomerName(name) {
		this.typeInInput(this.customerNameField, name)
	}

	submitChanges() {
		this.clickElement(this.submitUpdateCustomerForm)
	}

	verifyCustomerUpdatedSuccessfully() {
		this.verifyTextInBody(this.updatedSuccessfullyMessage)
	}

	verifyCustomerNotFound() {
		this.verifyTextInBody(this.customerNotFoundMessage)
	}
}

export default EditCustomerPage;
