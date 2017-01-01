import {combineReducers} from 'redux';
import {ADD_NOTE, TOGGLE_NOTE, SET_VISIBILITY_FILTER, Filters} from './actions';

const {SHOW_ALL} = Filters;


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


const note = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case TOGGLE_NOTE:
      if (state.id !== action.id) return state
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}


function notes(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        note(undefined, action)
      ]
    case TOGGLE_NOTE:
      return state.map(n => note(n, action))
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
const noteApp = {
  notes,
  visibilityFilter
};

export default noteApp;
