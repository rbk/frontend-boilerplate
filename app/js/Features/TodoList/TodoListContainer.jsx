import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './TodoInput';
import Todo from './Todo';

export default class TodoListContainer extends Component {
	constructor(props) {

		super(props);
    this.state = {
      todos: this.props.todos || [],
    };

    this.addTodo = this.addTodo.bind(this);
	}

  addTodo(text) {

    let todo = {text: text, completed: false};

    this.setState({
      todos: [].concat(this.state.todos).concat(todo),
    });
  }

  deleteTodo(todo) {
    let newState = this.state.todos;
    if (newState.indexOf(todo) > -1) {
      newState.splice(newState.indexOf(todo), 1);
      this.setState({todos: newState});
    }
  }

	render() {

    let todos = this.state.todos.map((todo, index) => {
      return (
        <Todo {...todo} key={index} deleteTodo={this.deleteTodo.bind(this, todo)} />
      );
    });

		return (
      <section className="xs-col-12 sm-col-12 md-col-6 mx-auto mt3">
        <TodoInput addTodo={this.addTodo} />
        <ul className="flex flex-column  col-12 pl0 list-style-none">
          {todos}
        </ul>
      </section>
		);
	}
}
