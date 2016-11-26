import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class TodoListContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <section className="xs-col-12 sm-col-12 md-col-6 mx-auto mt3">
        <div className="col-12">
          <input className="col-10" type="textfield" />
          <button className="col-2">Add</button>
        </div>
        <ul className="flex flex-column  col-12 pl0 list-style-none">
          <li className="flex flex-row items-center col-12 px2 py2">
            <input className="mr2" type="checkbox" />
            <div className="xs-col-8 sm-col-8 md-col-12">This is a list item</div>
            <div className="col-2"><button>remove</button></div>
          </li>
          <li className="flex flex-row items-center col-12 px2 py2">
            <input className="mr2" type="checkbox" />
            <div className="xs-col-8 sm-col-8 md-col-12">This is a list item</div>
            <div className="col-2"><button>remove</button></div>
          </li>
          <li className="flex flex-row items-center col-12 px2 py2">
            <input className="mr2" type="checkbox" />
            <div className="xs-col-8 sm-col-8 md-col-12">This is a list item</div>
            <div className="col-2"><button>remove</button></div>
          </li>
          <li className="flex flex-row items-center col-12 px2 py2">
            <input className="mr2" type="checkbox" />
            <div className="xs-col-8 sm-col-8 md-col-12">This is a list item</div>
            <div className="col-2"><button>remove</button></div>
          </li>
        </ul>
      </section>
		);
	}
}
