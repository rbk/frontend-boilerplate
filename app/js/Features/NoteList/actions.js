
/**
 * ActionTypes
 */
export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/**
 * Action Creators
 */

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
};

export function toggleNote(index) {
  return {
    type: TOGGLE_NOTE,
    index
  };
};

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
