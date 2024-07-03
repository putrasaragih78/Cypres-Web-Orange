import loginPage from "../../support/pageObject/loginPage"

describe('Verify Login', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
  })
  //TC01
  it('Failed Login - Password Invalid', () => {
    cy.get(loginPage.username).type('Admin')
    cy.get(loginPage.password).type('Saragih')
    cy.get(loginPage.clickbtn).click()
    cy.get(loginPage.errormsg).should('contain.text','Invalid credentials')
  })
  //TC02
  it('Failed Login - Username Invalid', () => {
    cy.get(loginPage.username).type('putra')
    cy.get(loginPage.password).type('admin123')
    cy.get(loginPage.clickbtn).click()
    cy.get(loginPage.errormsg).should('contain.text','Invalid credentials')  
  })
  //TC03
  it('Failed Login - Username Blank', () => {
    cy.get(loginPage.password).type('admin123')
    cy.get(loginPage.clickbtn).click()
    cy.get(loginPage.errormsgblank).should('contain.text','Required')  
  })
  //TC04
  it('Failed Login - Password Blank', () => {
    cy.get(loginPage.username).type('putra')
    cy.get(loginPage.clickbtn).click()
    cy.get(loginPage.errormsgblank).should('contain.text','Required')   
  })
  //TC05
  it('Success Login', () => {
    cy.get(loginPage.username).type('Admin')
    cy.get(loginPage.password).type('admin123')
    cy.get(loginPage.clickbtn).click()
    cy.url().should('include',loginPage.urldasboard)
    cy.get(loginPage.halamandashboard).should('contain.text','Dashboard')  
  
  })
})