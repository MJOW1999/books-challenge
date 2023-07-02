# Books Browser App

Build a simple app to fetch and search books. The app should have:

- a search input where users can type a book detail
- a book list with the author and title displayed
- a pagination component to switch between different results pages

### [Click here to see the Video Review]([LINK_TO_LOOM_VIDEO])

## Proposed Solution

- A simple UI with fake data was built first (testData.ts) - this aided in mapping out components
- The pagination logic was added and tested
- The API was integrated and the results are stored in component state
- The search logic was added

### [Click here to see the Live Version]()

## Assumptions

- No need for a global state management solution

## Libraries / Tools Used

- `React.js`
- Create React App with `Typescript` for project setup
- `Styled-Components`
- `Jest` for testing

## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`

## Running the tests

You can run the unit tests using:

`npm test`

## Future Work

1. Complete test coverage to achieve 90%
2. Improve styling and responsive design
3. Would be great to add `end-2-end` tests with `Cypress`
