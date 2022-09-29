/// <reference types="cypress"/>

export class LoginPage{
    elements = {
        inputEmail: () => cy.get('[aria-label="Email"]'),
        btnContinue: () => cy.contains('button','Continue'),
        inputPassword: () => cy.get('[aria-label="Password"]'),
        btnSignin: () => cy.contains('button','Sign in')
    }

    login(email, password){
        this.elements.inputEmail().type(email)
        this.elements.btnContinue().click()
        this.elements.inputPassword().type(password)
        this.elements.btnSignin().click()
        cy.wait(3000)
    }
}
export const login_page = new LoginPage()