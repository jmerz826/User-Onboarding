// Tests

describe('Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=username]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('elements check', () => {
        nameInput().should('exist');
    })




})