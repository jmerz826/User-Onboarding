// Tests

describe('Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');


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
        


    })




})