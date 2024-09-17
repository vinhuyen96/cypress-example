export class LoginPage {
    login = (account) => {
        cy.visit('https://demo.guru99.com/V4/')
        cy.get('input[name=uid]').type(account.userId)
        cy.get('input[name=password]').type(account.password)
        cy.get('input[name=btnLogin]').click()
        cy.get('marquee[class="heading3"]').contains("Welcome To Manager's Page of Guru99 Bank").should('be.visible')
      }
}
