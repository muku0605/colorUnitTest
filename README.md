# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### JEST Testing

https://github.com/bonnie/udemy-TESTING-LIBRARY

test("renders learn react link", () => {
render(<App />);
const linkElement = screen.getByText(/nlearn react/i);
expect(linkElement).toBeInTheDocument(); //Asertion
});

### More aassrtion

expect(elemet.textContent).toBe('hello');
expect(elementsArray).toHaveLength(7);

### jest DOm

comes with createReactAPP
src/setupTest.js imports it before each test ,makes matchers available
DOM -based matchers
e.g toBeVisible() ot toBeChecked()

React testing library(rtl) :- rendering componenets into virtual DOM
seraching virtual dom
interact with virtual DOM

npm test :0 euns as npm script and run jest in watch mode

watch mode(wach for changes in file since last commit )

getByRole e.g getByRole('button',{name:/submit/i}) for interractive

getByLabelText()
getByText() non interactive element

const linkElement = screen.getByRole("link", { name: /learn react/i });

https://www.w3.org/TR/wai-aria/#role_definitions

https://github.com/testing-library/jest-dom

### if direct matcher is not avialble then we use not to reverse it

const checkbox = screen.getByRole("checkbox");
expect(checkbox).not.toBeChecked();

## eslint-plugin-testing-library eslint-plugin-jest-dom

https://testing-library.com/docs/queries/about/
https://testing-library.com/docs/queries/about/#priority
https://testing-library.com/docs/react-testing-library/cheatsheet/

https://github.com/testing-library/user-event
