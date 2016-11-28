
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';

import Navigation from 'Features/Navigation';
import Home from 'Routes/Home';
import NoteListPage from 'Routes/NoteListPage';
import TodoListPage from 'Routes/TodoListPage';


let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let app = document.getElementById('app');





class Article extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.params.title}
        </h1>
      </div>
    );
  }
}







ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={Home} path="/">
          <Route component={NoteListPage} path="/notelist" />
          <Route component={TodoListPage} path="/todolist" />
        </Route>
        <Route component={Home} path="/article">
          <Route component={Article} path="/article/:title" />
        </Route>
      </Router>
    </Provider>,
    app);
