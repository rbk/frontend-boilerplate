import React, {Component} from 'react';
import Title from 'Features/Title';
import NoteList from 'Features/NoteList';
import Navigation from 'Features/Navigation';


export default class NoteListPage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="col-main mx-auto my2">
        <Title text="This is the NoteList page!" />
				<NoteList />

      </section>
    );
  }

}
