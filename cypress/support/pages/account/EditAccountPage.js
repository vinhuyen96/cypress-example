import BasePage from "../BasePage";

class EditAccountPage extends BasePage{
	constructor() {
		super()
		this.accountIdField = 'input[name="accountno"]'
		this.editAccountBtn = 'input[name="AccSubmit"]'
		this.accountTypeSelect = 'select[name="a_type"]'
		this.submitChangeBtn = 'input[name="button2"]'
		this.updatedSuccessfullyMsg = 'Account details updated Successfully'
		this.accountNotFoundMsg = 'Account does not exist'

	}

	enterAccountId(accountId) {
		this.typeInInput(this.accountIdField, accountId)
	}

	submitEditAccountForm() {
		this.clickElement(this.editAccountBtn)
	}

	selectNewAccountType(accountType) {
		cy.get(this.accountTypeSelect).select(accountType)
	}

	submitChanges() {
		this.clickElement(this.submitChangeBtn)
	}

	verifyAccountUpdatedSuccessfully() {
		this.verifyTextInBody(this.updatedSuccessfullyMsg)
	}

	verifyAccountNotFound() {
		this.verifyTextInBody(this.accountNotFoundMsg)
	}
}

export default EditAccountPage;
