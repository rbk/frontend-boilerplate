
/**
 * ActionTypes
 */
export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/**
 * Action Creators
 */

var nextNoteId = 0;

export function addNote(text) {
  return {
    type: ADD_NOTE,
    id: nextNoteId++,
    text
  };
};

export function toggleNote(id) {
  return {
    type: TOGGLE_NOTE,
    id
  };
};

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
