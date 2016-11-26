import React, {Component} from 'react';
import Title from 'Components/Title';
import TodoList from 'Components/TodoList';

export default class Home extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <main className="col-main mx-auto my2">
        <Title text="This is the Homepage!" />
				<TodoList />

      </main>
    );
  }

}
