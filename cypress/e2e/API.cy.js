/// <reference types = "Cypress"/>

describe('Pet store demo',()=>{

    it('Create user',()=>{
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: {
                "id": 99,
                "username": "abbringas",
                "firstName": "def",
                "lastName": "ghi",
                "email": "jkl@email.com",
                "password": "mno",
                "phone": "123456",
                "userStatus": 1
              }
        }).then(function(response){
            expect(response.status).equal(200);
        })
    })
    
    it('Get user',()=>{
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/abbringas',
        }).then(function(response){
            expect(response.body).deep.equal({
                "id": 99,
                "username": "abbringas",
                "firstName": "def",
                "lastName": "ghi",
                "email": "jkl@email.com",
                "password": "mno",
                "phone": "123456",
                "userStatus": 1
              })
        })
    })

    it('Delete user',()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/abbringas',
        }).then(function(response){
            expect(response.status).equal(200)
        })
    })

    it('Get user',()=>{
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/abbringas',
            failOnStatusCode:false
        }).then(function(response){
            expect(response.status).equal(404)
        })
    })
})