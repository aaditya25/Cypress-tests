describe('My first test with cypress',() =>{
    it('Go to google',()=>{
        cy.visit('https://books.toscrape.com/',{timeout: 10000})
        cy.url().should('include','books')
        cy.log('before reload')
        cy.reload()
        cy.log('after reload')
    })
    it('should check for correct element on the page',()=>{
        cy.get('h1').should('be.visible')  
    })
    it('should click on travel category',()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel').should('be.visible')
    })
    it('shoudl display correct number of books',()=>{
        cy.get('.product_pod').its('length').should('eq',11)
    })
    it('shoudl navigate to poetry',()=>{
        cy.get('a').contains('Poetry').click()
    })
    it('should open Olio book',()=>{
        cy.get('a').contains('Olio').click()
        cy.get('.price_color').should('contain','£23.88')
    })
})
