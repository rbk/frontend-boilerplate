import React from 'react';
import {merge} from 'lodash';

import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

// Import Components
import NoteListFeature from '../index';
import Footer from '../Components/Footer';
import Link from '../Components/Link';
import Note from '../Components/Note';
import NoteList from '../Components/NoteList';

// Import Containers
import FilterLink from '../Containers/FilterLink';
import SubmitNote from '../Containers/SubmitNote';
import VisibleNoteList from '../Containers/VisibleNoteList';


function setupNoteList() {
  const props = {
    addNote: sinon.spy(),
    notes: [
      {
        id: 1,
        completed: false,
        text: 'This is a test note'
      }
    ],
    onNoteClick: sinon.spy(),
  };

  const wrapper = mount(<NoteList {...props} />);

  return {
    props,
    wrapper
  };
}


describe('<NoteList />', () => {

  it('should render self and subcomponents', () => {

    const {wrapper} = setupNoteList();

    expect(wrapper.find(Note)).to.have.length(1);
  });
});
