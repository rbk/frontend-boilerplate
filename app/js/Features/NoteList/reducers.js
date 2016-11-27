import {combineReducers} from 'redux';
import {ADD_NOTE, TOGGLE_NOTE, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';
const {SHOW_ALL} = VisibilityFilters;


const initialState = {
  visibilityFilter: SHOW_ALL,
  notes: [],
};


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  };
}

function notes(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_NOTE:
      return state.map((note, index) => {
        if (index === action.index) {
          return Object.assign({}, note, {
            completed: !note.completed
          })
        }
        return note
      })
    default:
      return state
  }
}


/*
function noteApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    notes: notes(state.notes, action)
  }
}
*/

// This is the exact same as the above function
const noteApp = combineReducers({
  visibilityFilter,
  notes,
});

export default noteApp;
