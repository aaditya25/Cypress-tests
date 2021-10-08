describe('Device tests',()=>{
    it('720p',()=>{
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com/')
        cy.wait(3000)
    })
    it('iphone',()=>{
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com/')
        cy.wait(3000)

    })
})