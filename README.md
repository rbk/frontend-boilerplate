#Frontend Boilerplate
This is my personal boilerplate for developing in React.

##Main modules:

####Build tools
 1. Babel - transpile es6 and beyond
 2. Webpack - builds my JS for the browser
 3. Webpack-dev-server - creates a dev server. The index.html file is in /app/dist/
 4. Gulp - used for building the PostCSS
 5. @Todo: Get hot reloading to work
 6. @Todo: Build PostCSS with webpack and get rid of gulp

####Testing
 1. Mocha - test runner
 2. Chai - assertion library
 3. Enzyme - react testing library
 4. babel-preset-airbnb - babel preset needed for enzyme
 5. Jsdom - JS implementation of the WhatWG DOM spec

####Display
 1. React - view layer
 2. Isomorphic-fetch - with es6-promise for a promise based replacement for xhr.
 3. Redux - state management

####Styles
 1. postcss-custom-media - custom media queries
 2. postcss-custom-properties - css variables
 3. postcss-import - css import
 4. postcss-nested - nested css
 5. postcss-responsify - builds media queries
