import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Title extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className="m0 font-size-h1">{this.props.text}</h1>
			</div>
		);
	}
}
