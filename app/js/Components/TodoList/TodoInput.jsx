import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class TodoInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    this.props.addTodo(this.textInput.value);
    this.textInput.value = '';
  }

  render() {

    return (
      <div className="col-12">
        <input
          className="col-10"
          type="text"
          ref={input => {this.textInput = input}} />

        <button
          className="col-2"
          type="submit"
          onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }

}
