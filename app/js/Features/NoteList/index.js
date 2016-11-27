import React from 'react';
import Footer from './Components/Footer';
import SubmitNote from './Containers/SubmitNote';
import VisibleNoteList from './Containers/VisibleNoteList';

const NoteListFeature = () => (
  <div>
    <SubmitNote />
    <VisibleNoteList />
    <Footer />
  </div>
);

export default NoteListFeature;
