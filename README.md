#Frontend Boilerplate
This is my personal boilerplate for developing in React.

##Main modules:

####Build tools
 1. Babel - transpile es6 and beyond
 2. Webpack - builds my JS for the browser
 3. Webpack-dev-server - creates a dev server. The index.html file is in /app/dist/
 4. PostCSS packed and extracted with webpack

####Testing
 1. Mocha - test runner
 2. Chai - assertion library
 3. Enzyme - react testing library
 4. Sinon - mock, stub and spy library for testing
 5. babel-preset-airbnb - babel preset needed for enzyme
 6. Jsdom - JS implementation of the WhatWG DOM spec

####Display
 1. React - view layer
 2. Isomorphic-fetch - with es6-promise for a promise based replacement for xhr.
 3. Redux - state management

####Styles
 1. postcss-import - css import


##NPM Scripts

 1. `npm run dev` Start dev server at localhost:8080
 2. `npm run build` Build the files for production
 3. `npm run test` Not implemented, will run tests
