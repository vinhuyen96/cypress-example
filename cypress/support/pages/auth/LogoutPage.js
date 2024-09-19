import BasePage from "../BasePage";

class LogoutPage extends BasePage {
	constructor() {
		super()
	}

	logout() {
		// Handle the confirmation popup
		cy.on('window:confirm', () => true)
	}

	verifyLogoutSuccess() {
		this.verifyTextInBody('You Have Succesfully Logged Out');
	}
}

export default LogoutPage;
