import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';

import Home from 'Routes/Home';


let store = createStore(reducers);
let app = document.getElementById('app');



ReactDOM.render(<Home />, app);
