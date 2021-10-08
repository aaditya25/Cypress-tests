describe('custom command',()=>{
    it('login into app using custom cypress command',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username1','password1')
    })
})