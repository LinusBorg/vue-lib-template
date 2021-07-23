/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('should render', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-test-message]').contains("Hello from 'vue-monorepo-lib'")
  })
})
