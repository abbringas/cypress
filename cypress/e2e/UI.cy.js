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

    my_profile_page.navigateToSection('Languages')
    cy.verifyURL(data.languagesPageURL)

    my_profile_page.addOtherLanguage(data.otherLanguage,data.otherLanguageProficiency)
    my_profile_page.verifyAddedOtherLanguage(data.otherLanguage,data.otherLanguageProficiency)

    header_page.navigateToSignOut()
    cy.verifyURL(data.loginPageURL)
  }) 
})



// describe('Update candidate information',()=>{
//   beforeEach('Login',()=>{
//     cy.visit(data.baseURL)
//     login_page.login(data.email,data.password)
//   })

//   afterEach('Logout',()=>{
//     header_page.navigateToSignOut()
//   })

//   it('Verify Successful login', () => {
//     cy.verifyURL(data.homepageURL)
//   }) 
  
//   it('Verify navigation to My Profile page', () => {
//     header_page.navigateToMyProfile()
//     cy.verifyURL(data.myProfilePageURL)
//   })

//   it('Verify successful update of contact and location info', () => {
//     header_page.navigateToMyProfile()
//     my_profile_page.editContactInfo(data.newPhoneNumber)
//     my_profile_page.verifyIfContactInfoIsSave(data.newPhoneNumberFormatted)
//     my_profile_page.editLocation(data.newPostalCode)
//     my_profile_page.verifyIfLocationIsSave(data.newPostalCode)
//   })

//   it('Verify navigation to Languages page', () => {
//     header_page.navigateToMyProfile()
//     my_profile_page.navigateToSection('Languages')
//     cy.verifyURL(data.languagesPageURL)
//   })

//   it('Verify successful update of adding other languages', () => {
//     header_page.navigateToMyProfile()
//     my_profile_page.navigateToSection('Languages')
//     my_profile_page.addOtherLanguage(data.otherLanguage,data.otherLanguageProficiency)
//     //add verification here
//   })
// })
