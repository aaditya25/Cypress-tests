describe('select box',()=>{
    it('Should load website with select box',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })
    it('Should select an option from select box',()=>{
        cy.get('#submit-button').scrollIntoView()
    })

})