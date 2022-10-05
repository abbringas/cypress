import {login_page} from "../support/pages/login_page"
import {header_page} from "../support/pages/header_page"
import {myProfilePage, my_profile_page} from "../support/pages/my_profile_page"
const data = require('../fixtures/signInAndSecurity_data.json')
const constant = require('../fixtures/constants.json')

before('Login',() => {
  cy.visit(data.baseURL)
  login_page.login(data.email,data.password)
})

describe('Update candidate information',()=>{
  it.only('Update password', () =>  {
    header_page.navigateToMyProfile()
    my_profile_page.navigateToSection(constant.SIGN_IN_AND_SECURITY)
    my_profile_page.updatePassword(data.newPassword)
  })
})