# Cypress E2E Automation - SauceDemo (Swag Labs)

This repository contains an automated UI testing framework for the [SauceDemo (Swag Labs)](https://www.saucedemo.com/) e-commerce application. Built from the ground up using **Cypress**, this project demonstrates modern, fast, and reliable web automation testing without the need for manual waits or complex WebDriver setups.

This suite is designed as a standalone, modular architecture. Tests are self-contained, ensuring high reliability and making it an excellent reference for debugging DOM rendering issues and locator strategies.

## 🛠️ Tech Stack & Tools

* **Testing Framework:** Cypress (v16+)
* **Language:** JavaScript (Node.js)
* **Target Application:** React.js Web Frontend (SauceDemo)
* **Assertions:** Chai (built into Cypress)

## 🚀 Setup and Installation

**1. Prerequisites:**
Ensure you have [Node.js](https://nodejs.org/) (v14 or higher) installed on your machine.

**2. Clone the repository:**
```bash
git clone [https://github.com/Amish00/Cypress-E2E-SauceDemo.git](https://github.com/Amish00/Cypress-E2E-SauceDemo.git)
cd Cypress-E2E-SauceDemo
```
**3. Install dependencies:**
```bash
npm install
```
⚙️ Execution
Interactive Mode (Test Runner UI):
Best for debugging, time-traveling, and watching tests run in real-time.
```bash
npx cypress open
```
Headless Mode (CLI):
Best for CI/CD pipelines (like GitHub Actions) as it runs silently in the terminal.
```bash
npx cypress run
```
