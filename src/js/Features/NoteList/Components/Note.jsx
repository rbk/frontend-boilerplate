import React, {PropTypes} from 'react';

const Note = ({onClick, completed, text}) => (
  <li onClick={onClick} className={`cursor-pointer ${completed ? 'strike-through': 'text-decoration-none'}`}>
    {text}
  </li>
);

Note.propType = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Note;
