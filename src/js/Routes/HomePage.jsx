import React, {Component} from 'react';
import NoteList from 'Features/NoteList';


export default class Client extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="mx-auto px3" style={{ maxWidth: '480px' }}>
        <h1>Note list</h1>
				<NoteList />

      </section>
    );
  }

}
