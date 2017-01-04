import React, {Component} from 'react';
import NoteList from 'Features/NoteList';


export default class Client extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="">
        <h1>Note list</h1>
				<NoteList />

      </section>
    );
  }

}
