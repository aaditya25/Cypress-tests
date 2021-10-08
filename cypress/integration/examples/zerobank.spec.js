const { describe } = require("mocha")

describe('Tests on Zero bank',()=>{
    it('should override the current time',()=>{
        const date = new Date(2020,3,10).getTime()
        cy.clock(date)
        cy.log(date)
    })
    it('should load yero bank page',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log:true})
        cy.clearLocalStorage({log:true})
        cy.title().should('include','Zero - Log in')
    })

    it('should fill username',()=>{
        cy.fixture('example').then(example=>{
            const username = example.username
            const password = example.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('input[type="checkbox"]').click()
        })
    })
    it('should submit login form ',()=>{
        cy.get('.btn-primary').click()
    })
    it('should display error message',()=>{
        cy.get('.alert').should('be.visible').and('contain','wrong')
    })
})

/*http://zero.webappsecurity.com/login.html*/