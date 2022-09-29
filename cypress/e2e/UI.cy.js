import {login_page} from "../support/pages/login_page"
import {header_page} from "../support/pages/header_page"
import {myProfilePage, my_profile_page} from "../support/pages/my_profile_page"
const data = require('../fixtures/data.json')
const constant = require('../fixtures/constants.json')

before('Prerequisite clean up',() => {
  cy.visit(data.baseURL)
  login_page.login(data.email,data.password)
  header_page.navigateToMyProfile()
  my_profile_page.clearContactInfo()
  my_profile_page.editLocation(Math.ceil(Math.random() * 10000))
  my_profile_page.navigateToSection(constant.LANGUAGES)
  my_profile_page.removeAllOtherlanguages()
  header_page.navigateToSignOut()
})

describe('Update candidate information',()=>{
  it('Successful update ', () => {
    cy.visit(data.baseURL)
    login_page.login(data.email,data.password)
    cy.verifyURL(data.homepageURL)

    header_page.navigateToMyProfile()
    cy.verifyURL(data.myProfilePageURL)

    my_profile_page.editContactInfo(data.newPhoneNumber)
    my_profile_page.verifyIfContactInfoIsSave(data.newPhoneNumberFormatted)

    my_profile_page.editLocation(data.newPostalCode)
    my_profile_page.verifyIfLocationIsSave(data.newPostalCode)

    my_profile_page.navigateToSection(constant.LANGUAGES)
    cy.verifyURL(data.languagesPageURL)

    my_profile_page.addOtherLanguage(data.otherLanguage,data.otherLanguageProficiency)
    my_profile_page.verifyAddedOtherLanguage(data.otherLanguage,data.otherLanguageProficiency)

    header_page.navigateToSignOut()
    cy.verifyURL(data.loginPageURL)
  }) 
})