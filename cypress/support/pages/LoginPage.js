// export class LoginPage {
//     login = (account) => {
//         cy.visit('https://demo.guru99.com/V4/')
//         cy.get('input[name=uid]').type(account.userId)
//         cy.get('input[name=password]').type(account.password)
//         cy.get('input[name=btnLogin]').click()
//         cy.get('marquee[class="heading3"]').contains("Welcome To Manager's Page of Guru99 Bank").should('be.visible')
//       }
// }

class LoginPage {
    navigate() {
        cy.visit('https://demo.guru99.com/V4/');
    }

    enterUserId(userId) {
        cy.get('input[name="uid"]').type(userId);
    }

    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickLogin() {
        cy.get('input[name="btnLogin"]').click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', 'Managerhomepage');
    }

    verifyLoginFailure() {
        cy.get('body').should('contain', 'User or Password is not valid');
    }
}

export default LoginPage;
