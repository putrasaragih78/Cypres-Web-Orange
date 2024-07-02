describe('Verify Login', () => {
  it('Failed Login - Min pas char', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('putra')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Saragih')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('contain.text','Invalid credentials')
  })
  it('Failed Login - Username Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('putra')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('contain.text','Invalid credentials')  
  })
  it('Failed Login - Password Blank', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('putra')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input-group > .oxd-text').should('contain.text','Required')   
     
  })
})