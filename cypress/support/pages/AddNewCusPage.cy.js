import {LoginPage} from "./LoginPage.cy";

export class AddNewCusPage {
    addNewCus = (info) => {
      const login = new LoginPage();
      const account  = {
        userId: "mngr589401",
        password: "rupUqeg"
      }
      login.login(account)
      cy.get('a[href*="addcustomerpage.php"]').click()
      cy.get('input[name=name]').type(info.name)
      cy.get('[type="radio"]').first().check()
      cy.get('[type="date"]').type('2024-09-16')
      cy.get('textarea').type('101B Le Huu Trac')
      cy.get('input[name=city]').type('Da Nang')
      cy.get('input[name=state]').type('Son Tra')
      cy.get('input[name=pinno]').type('500000')
      cy.get('input[name=telephoneno]').type('0876430247')
      cy.get('input[name=emailid]').type(info.email)
      cy.get('input[name=password]').type('uyen@gmail.com')
      cy.get('[type=submit]').click()
      cy.get('td>.heading3').contains("Customer Registered Successfully!!!").should('be.visible')
    }
}
