// React
import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';


// Redux
import {Provider} from 'react-redux';
import configureStore from './store';

let initState = {};

const store = configureStore(initState);

// Routes
import HomePage from './Routes/HomePage';


/**
 * Client parent container
 *
 */
class Client extends Component {

  constructor(props) {

    super(props);
  }

  componentDidMount() {

    console.log('client mounted');
  }

  render() {

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={ HomePage } />
        </Router>
      </Provider>
    );
  }

}

export default Client;
