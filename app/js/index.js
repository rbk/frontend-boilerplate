import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

import Home from 'Routes/Home';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let app = document.getElementById('app');



ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    app);
