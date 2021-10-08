describe('read write data into json / text file', () => {
    it('should write data into json file', () => {
        cy.writeFile('log.json',{name: 'Adi', age:29})
    });
    it('should write data into text file', () => {
        cy.writeFile('log.txt',{name: 'Adi', age:28})
    });
    it('should read data into json file', () => {
        cy.readFile('log.json').its('age').should('eq',28)
    });
    it('should read and verify the browser document contents', () => {
        cy.visit('http://www.example.com/')
        cy.wait(2000)
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.property','charset').should('eq','UTF-8')
    });
});