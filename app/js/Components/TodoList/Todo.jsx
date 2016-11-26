import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Todo extends Component {


  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      completed: this.props.completed,
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(e) {

    if (e && e.target) {
      if (e.target.tagName.toLowerCase() === 'button') return false;
    }

    this.setState({
      completed: !this.state.completed,
    });
  }

  render() {

    return (
      <li className="flex flex-row items-center col-12 px2 py2" onClick={this.toggleCompleted}>
        <input className="mr2" type="checkbox" checked={this.state.completed} style={{width: '25px'}}/>
        <div className="xs-col-8 sm-col-8 md-col-12">{this.state.text}</div>
        <div className="col-2"><button type="delete" onClick={this.props.deleteTodo}>remove</button></div>
      </li>
    );
  }

}
