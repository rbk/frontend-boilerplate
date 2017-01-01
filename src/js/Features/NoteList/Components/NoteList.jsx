import React, {PropTypes} from 'react';
import Note from './Note';

const NoteList = ({notes, onNoteClick}) => (
  <ul>
    { notes.map(note => <Note key={note.id} {...note} onClick={() => onNoteClick(note.id)} />) }
  </ul>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onNoteClick: PropTypes.func.isRequired
};

export default NoteList;
