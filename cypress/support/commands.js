Cypress.Commands.add('login', () => {
	//read file account.json
	cy.fixture('account.json').then((account) => {
		//navigate
		cy.visit(Cypress.config().baseUrl)
		//input account
		cy.get('input[name="uid"]').type(account.userId)
		cy.get('input[name="password"]').type(account.password)
		//submit
		cy.get('input[name="btnLogin"]').click()
	});
	cy.contains('Manger Id :').should('be.visible')
})
