import React, {Component} from 'react';
import Navigation from 'Features/Navigation';


export default class Home extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <main className="col-12 px2">
        <Navigation />
        <p>
        </p>
        {this.props.children}
      </main>
    );
  }

}
