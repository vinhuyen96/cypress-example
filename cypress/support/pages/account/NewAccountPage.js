import BasePage from "../BasePage";

class NewAccountPage extends BasePage{
	constructor() {
		super();
		this.customerIdField = 'input[name="cusid"]'
		this.accountTypeField = 'select[name="selaccount"]'
		this.initialDepositField = 'input[name="inideposit"]'
		this.addAccountBtn = 'input[name="button2"]'
		this.createdSucessfullyField = 'Account Generated Successfully!!!'
		this.errorMessageInvalidCustomerId = 'Customer does not exist'
	}

	enterCustomerId(customerId) {
		this.typeInInput(this.customerIdField, customerId)
	}

	selectAccountType(accountType) {
		cy.get(this.accountTypeField).select(accountType)
	}

	enterInitialDeposit(deposit) {
		this.typeInInput(this.initialDepositField, deposit)
	}

	submitNewAccountForm() {
		this.clickElement(this.addAccountBtn)
	}

	verifyAccountCreatedSuccessfully() {
		this.verifyTextInBody(this.createdSucessfullyField)
	}

	verifyErrorForInvalidCustomerId() {
		this.verifyTextInBody(this.errorMessageInvalidCustomerId)
	}
}

export default NewAccountPage;
