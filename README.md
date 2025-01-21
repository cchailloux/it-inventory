# Context
SOPHT technical interview
https://sopht.com/

# App criteria

## API
- REST API
- basic functionalities to manage IT inventory
- data can be in a database or in RAM
---> no database for now

Examples of basic actions:
- add a computer to the inventory by specifying basic info (machine name, purchase date, purchase price, yearly electrical consumptio)
- list all of the items of the computer park
- show a recap of monthly material spendings (for last 12months)
- show a recap of monthly electrical spendings (device bought before start of month = whole month consumption ; device bought after = partial)

Language choice : Typescript.
API framework choice : Express.


## Web interface
- form to enter info to add a new device
- web page showing a dashboard to visualize the whole inventory
- web page with 2 dashboards to display spending on devices and spending on electricity, both by month