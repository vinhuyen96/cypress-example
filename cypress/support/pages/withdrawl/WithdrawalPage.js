import BasePage from "../BasePage";

class WithdrawalPage extends BasePage{
	constructor() {
		super();
		this.accountIdField = 'input[name="accountno"]'
		this.amountField = 'input[name="ammount"]'
		this.descriptionField = 'input[name="desc"]'
		this.submitWithdrawalBtn = 'input[name="AccSubmit"]'
		this.withdrawalSuccessfulMsg = 'Transaction details of Withdrawal for Account'
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

	submitWithdrawalForm() {
		this.clickElement(this.submitWithdrawalBtn)
	}

	verifyWithdrawalSuccessful() {
		this.verifyTextInBody(this.withdrawalSuccessfulMsg)
	}

	verifyAccountNotFound() {
		this.verifyTextInBody(this.accountNotFoundMsg)
	}
}

export default WithdrawalPage;
