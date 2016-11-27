import {connect} from 'react-redux';
import {toggleNote, Filters} from '../actions';
import NoteList from '../Components/NoteList';
const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = Filters;


const getVisibleNotes = (notes, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return notes
    case SHOW_COMPLETED:
      return notes.filter(n => n.completed)
    case SHOW_ACTIVE:
      return notes.filter(n => !n.completed)
  };
};

const mapStateToProps = (state) => {
  return {
    notes: getVisibleNotes(state.notes, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick: id => { dispatch(toggleNote(id)) }
  }
};

const VisibleNoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default VisibleNoteList;
