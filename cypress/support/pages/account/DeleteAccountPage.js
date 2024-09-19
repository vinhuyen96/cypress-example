import BasePage from "../BasePage";

class DeleteAccountPage extends BasePage {
	constructor() {
		super()
		this.accountIdField = 'input[name="accountno"]'
		this.deleteAccountBtn = 'input[name="AccSubmit"]'
		this.confirmDeletionMessage = 'Do you really want to delete this Account?'
		this.deletedSuccessfullyMsg = 'Account Deleted Sucessfully'
		this.accountNotFoundMsg = 'Account does not exist'
	}

	enterAccountId(accountId) {
		this.typeInInput(this.accountIdField, accountId)
	}

	submitDeleteAccountForm() {
		this.clickElement(this.deleteAccountBtn)
	}

	confirmDeletion() {
		cy.on('window:confirm', (str) => {
			expect(str).to.eq(this.confirmDeletionMessage)
			return true
		});
	}

	verifyAccountDeletedSuccessfully() {
		this.verifyTextInBody(this.deletedSuccessfullyMsg)
	}

	verifyAccountNotFound() {
		this.verifyTextInBody(this.accountNotFoundMsg)
	}
}

export default DeleteAccountPage;
