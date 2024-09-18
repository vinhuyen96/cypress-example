import BasePage from './basePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.userIdField = 'input[name="uid"]'
        this.passwordField = 'input[name="password"]';
        this.loginButton = 'input[name="btnLogin"]'
    }

    enterUserId(userId) {
        this.typeInInput(this.userIdField, userId)
    }

    enterPassword(password) {
        this.typeInInput(this.passwordField, password)
    }

    clickLogin() {
        this.clickElement(this.loginButton);
    }

    verifyLoginSuccess() {
        cy.url().should('include', 'Managerhomepage');
    }

    verifyLoginFailure() {
        cy.get('body').should('contain', 'User or Password is not valid');
    }
}

export default LoginPage;

