import BasePage from "../BasePage";

class DeleteCustomerPage extends BasePage{
	constructor() {
		super()
		this.customerId = 'input[name="cusid"]'
		this.submitDeleteCustomer = 'input[name="AccSubmit"]'
		this.deletedSuccessfullyMessage = 'Customer deleted Successfully'
		this.deletedFailureMessage = 'Customer does not exist'
	}

	enterCustomerId(customerId) {
		this.typeInInput(this.customerId, customerId)
	}

	submitDeleteCustomerForm() {
		this.clickElement(this.submitDeleteCustomer)
	}

	confirmDeletion() {
		cy.on('window:confirm', (str) => {
			expect(str).to.eq('Do you really want to delete this Customer?')
			return true;
		});
	}

	verifyCustomerDeletedSuccessfully() {
		this.verifyTextInBody(this.deletedSuccessfullyMessage)
	}

	verifyCustomerNotFound() {
		this.verifyTextInBody(this.deletedFailureMessage)
	}
}

export default DeleteCustomerPage;
