import React, {Component} from 'react';
import Navigation from 'Features/Navigation';


export default class Home extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <main>
        <Navigation />
        {this.props.children}
      </main>
    );
  }

}
