# Context

As this is a mock project, there's more to do than to be done. This document is to list general things necessary to complete the project - it is not exhaustive.

## Data
For now, the mock data is defined in src/data/mockData.ts and any change made to it won't be persisted.
Those mock data items don't even have an id !
We need to pick a database and an ORM.

## Functionalities
Display last 12 months purchase spending:
- TO DO

Display electricity consumption for all devices per month:
- POC done
- update that display when a new device is added
- handle when monthes have begun (whether the purchase month or the current month)

List all devices in the inventory:
- POC done
- pagination needed for any list longer than 20

Add a device through a form:
- POC done
- no security around input text - checks needed to avoid attack and even just weirdly formatted chars and names

## Code sanity
As of today, all of the web app is in a single html file.
- split code into smaller chunks
- have reusable components

## Style
TO DO...
To see raw html, comment the line "<link rel="stylesheet" href="styles.css">"