it('adds todos', () => {
    cy.visit('https://demo.guru99.com/V4/')
    cy.get('input[name=uid]').type('mngr589401')
    cy.get('input[name=password]').type('rupUqeg')
    cy.get('input[name=btnLogin]').click()
    cy.wait(2000) 
    cy.get('marquee[class="heading3"]').contains("Welcome To Manager's Page of Guru99 Bank").should('be.visible')
  })