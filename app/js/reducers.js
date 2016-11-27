import {combineReducers} from 'redux';

// Reducers
import noteApp from 'Features/NoteList/reducers.js';

let app = combineReducers({
  ...noteApp,
});

export default app;
