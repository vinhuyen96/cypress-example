import BasePage from "../BasePage";

class DepositPage extends BasePage{
	constructor() {
		super()
		this.accountIdField = 'input[name="accountno"]'
		this.amountField = 'input[name="ammount"]'
		this.descriptionField = 'input[name="desc"]'
		this.submitDepositbtn = 'input[name="AccSubmit"]'
		this.depositSuccessfullyMsg = 'Transaction details of Deposit for Account'
		this.accountNotFoundMsg = 'Account does not exist'
	}

	enterAccountId(accountId) {
		this.typeInInput(this.accountIdField, accountId)
	}

	enterAmount(amount) {
		this.typeInInput(this.amountField, amount)
	}

	enterDescription(description) {
		this.typeInInput(this.descriptionField, description)
	}

	submitDepositForm() {
		this.clickElement(this.submitDepositbtn)
	}

	verifyDepositSuccessful() {
		this.verifyTextInBody(this.depositSuccessfullyMsg)
	}

	verifyAccountNotFound() {
		this.verifyTextInBody(this.accountNotFoundMsg)
	}
}

export default DepositPage;
