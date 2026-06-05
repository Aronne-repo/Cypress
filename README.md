# Cypress UI Test Automation Framework

Automated UI test framework built with **JavaScript/TypeScript and Cypress**.
Designed with a scalable structure based on Cypress E2E architecture and ready for CI/CD integration.

---

## Technical Stack

- Node.js
- Cypress
- JavaScript / TypeScript
- Mocha (Cypress built-in test runner)
- Chai Assertions

---

## Install dependencies:
```
npm install
```
## If Cypress is not installed:
```
npm install cypress --save-dev
```
## Open Cypress for the first time:
```
npx cypress open
```
---

## Test launch

**Run all tests in headless mode**:
```
npx cypress run
```
**Run all tests in specific browser**:
```
npx cypress run --browser chrome
```
**Run a specific spec file**:
```
npx cypress run --spec "cypress/e2e/login/login.cy.js"
```
**Run tests in interactive mode (GUI)**:
```
npx cypress open
```
---

## This framework can be easily integrated with:

- GitHub Actions
- Jenkins
- GitLab CI
- Azure DevOps
