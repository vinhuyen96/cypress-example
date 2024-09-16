describe('Home Page', () => {
  it('valid', () => {
      cy.visit('https://demo.guru99.com/V4/')
      cy.get('input[name=uid]').type('mngr589401')
      cy.get('input[name=password]').type('rupUqeg')
      cy.get('input[name=btnLogin]').click()
      cy.wait(2000) 
      cy.get('marquee[class="heading3"]').contains("Welcome To Manager's Page of Guru99 Bank").should('be.visible')
    })
    // duplicate
    it('add new customer', () => {
      cy.visit('https://demo.guru99.com/V4/')
      cy.get('input[name=uid]').type('mngr589401')
      cy.get('input[name=password]').type('rupUqeg')
      cy.get('input[name=btnLogin]').click()
      cy.wait(2000) 
      cy.get('marquee[class="heading3"]').contains("Welcome To Manager's Page of Guru99 Bank").should('be.visible')
      cy.get('a[href*="addcustomerpage.php"]').click()
      cy.get('input[name=name]').type('Uyen is the most beautiful girl')
      cy.get('[type="radio"]').first().check()
      cy.get('[type="date"]').type('2024-09-16')
      cy.get('textarea').type('101B Le Huu Trac')  
      cy.get('input[name=city]').type('Da Nang');
      cy.get('input[name=state]').type('Son Tra');
      cy.get('input[name=pinno]').type('500000');
      cy.get('input[name=telephoneno]').type('0876430247');
      cy.get('input[name=emailid]').type('uyents1@gmail.com');
      cy.get('input[name=password]').type('uyen@gmail.com');
      cy.get('[type=submit]').click()
      cy.wait(2000) 
      cy.get('td>.heading3').contains("Customer Registered Successfully!!!").should('be.visible') //some stuck here - the xpath is wrong
    })
  
})