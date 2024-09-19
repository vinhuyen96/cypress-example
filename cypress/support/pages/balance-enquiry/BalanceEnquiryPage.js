import BasePage from "../BasePage";

class BalanceEnquiryPage extends BasePage{
	constructor() {
		super();
		this.accountIdField = 'input[name="accountno"]'
		this.submitBalanceEnquiryBtn = 'input[name="AccSubmit"]'
		this.balanceEnquirySuccessfullyMsg = 'Balance Details for Account'
		this.accountNotFoundMsg = 'Account does not exist'
	}
	enterAccountId(accountId) {
		this.typeInInput(this.accountIdField, accountId)
	}

	submitBalanceEnquiryForm() {
		this.clickElement(this.submitBalanceEnquiryBtn)
	}

	verifyBalanceEnquirySuccessful() {
		this.verifyTextInBody(this.balanceEnquirySuccessfullyMsg)
	}

	verifyAccountNotFound() {
		this.verifyTextInBody(this.accountNotFoundMsg)
	}
}

export default BalanceEnquiryPage;
