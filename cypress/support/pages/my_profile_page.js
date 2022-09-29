/// <reference types="cypress"/>

export class myProfilePage{
    elements = {
        leftPane:{
            link: (section) => cy.contains('a',section)
        },
        basicInfo:{
            contactInfo: {
                divContactInfo: () => cy.get('.contact-info'),
                btnEdit: () => cy.get('.contact-info').contains('Edit'),
                divPhoneCountry: () => cy.get('.contact-info').contains('Country'),
                inputPhoneNumber: () => cy.get('[aria-label="Phone number"]')
            },
            location:{
                divLocation: () => cy.get('.location'),
                btnEdit: () => cy.get('.location').contains('Edit'),
                inputPostalCode: () => cy.get('[aria-label="Postal code*"]')
            },
            btnSave: () => cy.contains('Save'), 
        },
        languages:{
            primaryLanguage:{
                
            },
            otherLanguages:{
                btnAdd: () => cy.get('#userprofile-component-container .others').contains('button','Add'),
                newLanguageForm:() => cy.get('#new-language-form').find('form'),
                inputLanguage: () => cy.get('#new-language-form').find('input[aria-label="Type language and select*"]'),
                inputProficiency: () => cy.get('#new-language-form').find('input[aria-label="Select proficiency level*"]'),
                btnSave: () => cy.get('#new-language-form').contains('button','Save'),
                btnCancel: () => cy.get('#new-language-form').contains('button','Cancel'),
                otherLanguageForm:() => cy.get('.other-language'),
                div: () => cy.get('#userprofile-component-container .others'),
                btnDelete: () => cy.get('.trash-div')
            }   
        },
        btnYes : () => cy.contains('button','Yes')
    }
    removeAllOtherlanguages(){  
        this.elements.languages.otherLanguages.div().then($body =>{
            if ($body.find('.trash-div').length > 0){
                this.elements.languages.otherLanguages.btnDelete().each(()=>{
                    this.elements.languages.otherLanguages.btnDelete().first().click()
                    this.elements.btnYes().click().wait(3000)
                })
            }
        })  
    }

    verifyAddedOtherLanguage(language,proficiency){
        this.elements.languages.otherLanguages.otherLanguageForm().should('contain', language)
        this.elements.languages.otherLanguages.otherLanguageForm().should('contain', proficiency)
    }

    addOtherLanguage(language,proficiency){
        this.elements.languages.otherLanguages.btnAdd().click();
        this.elements.languages.otherLanguages.inputLanguage().wait(500).type(language+'{enter}',{delay:50})
        this.elements.languages.otherLanguages.inputProficiency().wait(500).type(proficiency+'{enter}',{delay:50})
        this.elements.languages.otherLanguages.newLanguageForm().submit()
        cy.wait(3000)
    }

    navigateToSection(section){
        this.elements.leftPane.link(section).click()
        cy.wait(3000)
    }

    editContactInfo(phoneNumber){   
        this.elements.basicInfo.contactInfo.btnEdit().click()
        this.elements.basicInfo.contactInfo.inputPhoneNumber().wait(500).clear().type('{moveToStart}').type(phoneNumber+'{enter}',{delay:50})
        cy.wait(3000)
    }

    clearContactInfo(){
        this.elements.basicInfo.contactInfo.btnEdit().click()
        this.elements.basicInfo.contactInfo.inputPhoneNumber().wait(500).clear().type('{moveToStart}{enter}')
        cy.wait(3000)
    }

    editLocation(postalCode){
        this.elements.basicInfo.location.btnEdit().click()
        this.elements.basicInfo.location.inputPostalCode().wait(500).clear().type('{moveToStart}').type(postalCode+'{enter}',{delay:50})
        cy.wait(3000)
    }

    verifyIfContactInfoIsSave(phoneNumber){
        this.elements.basicInfo.contactInfo.divContactInfo().should('include.text',phoneNumber)
    }

    verifyIfLocationIsSave(postalCode){
        this.elements.basicInfo.location.divLocation().should('include.text',postalCode)
    }
}
export const my_profile_page = new myProfilePage()