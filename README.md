# Context
Mock project for a technical interview at SOPHT - https://sopht.com/

# Run the app
Run `npm start`

# App description
Language choice: Typescript.
API framework choice: Express.
Test library choice: Jest.
Database: none.

## Criteria
The project has the followng criteria:
- REST API
- basic functionalities to manage IT inventory
- data can be in a database or in RAM

Examples of basic actions:
- add a computer to the inventory by specifying basic info (machine name, purchase date, purchase price, yearly electrical consumptio)
- list all of the items of the computer park
- show a recap of monthly material spendings (for last 12months)
- show a recap of monthly electrical spendings (device bought before start of month = whole month consumption ; device bought after = partial)