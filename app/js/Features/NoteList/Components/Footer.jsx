import React from 'react';
import FilterLink from '../Containers/Filterlink';
import {Filters} from '../actions';
const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = Filters;

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Footer;
