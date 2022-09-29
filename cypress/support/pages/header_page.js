/// <reference types="cypress"/>

export class HeaderPage{
    elements = {
        btnUserAvatar: () => cy.get('header [aria-label="User Avatar"]'),
        linkMyProfile: () => cy.contains('My Profile'),
        linkSignOut: () => cy.contains('Sign Out')
    }

    navigateToMyProfile(){
        this.elements.btnUserAvatar().click()
        this.elements.linkMyProfile().click()
        cy.wait(3000)
    }

    navigateToSignOut(){
        this.elements.btnUserAvatar().click()
        this.elements.linkSignOut().click()
        cy.wait(3000)
    }
}
export const header_page = new HeaderPage()