// Tests

describe('Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id=submit-button]');


    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('elements existence check', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsInput().should('exist');
    })

    describe('Form input functionality', () => {
        it('can type in inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('John Merz')
                .should('have.value', 'John Merz');
            
            emailInput()
                .should('have.value', '')
                .type('testemail@aol.com')
                .should('have.value', 'testemail@aol.com');
            
            passwordInput()
                .should('have.value', '')
                .type('123456')
                .should('have.value', '123456');
            
            termsInput()
                .check()
                .should('have.checked', 'true')
        })
    })

    describe('Form submission should work', () => {
        it('can submit a new user', () => {
            nameInput().type('Tim');
            emailInput().type('test@gmail.com');
            passwordInput().type('123456');
            termsInput().check();
            submitBtn().click();
            cy.contains('Tim').should('exist');

        })
    })

    describe('Form checks for validation', () => {
        it('can display error messages if data input is invalid', () => {
            nameInput()
                .should('have.value', '')
                .type('q');
            
            emailInput()
                .should('have.value', '')
                .type('a')
            
            passwordInput()
                .should('have.value', '')
                .type('12')
            
            termsInput()
                .uncheck()
            
            cy.contains('Username needs to be at least 4 characters long').should('exist');
            cy.contains('Must be valid email!').should('exist');
            cy.contains('password must be at least 4 characters long').should('exist');
            cy.contains('Must accept terms of service').should('exist');



            
        })

    })

})