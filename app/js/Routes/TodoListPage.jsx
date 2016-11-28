
import React, {Component} from 'react';
import Title from 'Features/Title';
import TodoList from 'Features/TodoList';
import Navigation from 'Features/Navigation';


export default class TodoListPage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <main className="col-main mx-auto my2">
        <Title text="This is the TodoList page!" />
				<TodoList />

      </main>
    );
  }

}
