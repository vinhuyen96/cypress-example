import BasePage from "../BasePage";

class FundTransferPage extends BasePage{
	constructor() {
		super()
		this.payerAccountField = 'input[name="payersaccount"]'
		this.payeeAccountField = 'input[name="payeeaccount"]'
		this.amountField = 'input[name="ammount"]'
		this.descriptionField = 'input[name="desc"]'
		this.fundTransferBtn = 'input[name="AccSubmit"]'
		this.fundTransferSuccessfullMsg = 'Fund Transfer Details'
		this.payeeNotFoundMsg = 'Fund Transfer Details'
	}
	enterPayersAccountId(accountId) {
		this.typeInInput(this.payerAccountField, accountId)
	}

	enterPayeesAccountId(accountId) {
		this.typeInInput(this.payeeAccountField, accountId)
	}

	enterAmount(amount) {
		this.typeInInput(this.amountField, amount)
	}

	enterDescription(description) {
		this.typeInInput(this.descriptionField, description)
	}

	submitFundTransferForm() {
		this.clickElement(this.fundTransferBtn)
	}

	verifyFundTransferSuccessful() {
		this.verifyTextInBody(this.fundTransferSuccessfullMsg)
	}

	verifyPayeeNotFound() {
		this.verifyTextInBody(this.payeeNotFoundMsg)
	}
}

export default FundTransferPage;
