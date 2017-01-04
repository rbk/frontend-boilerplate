import React from 'react';
import { render } from 'react-dom';
import Client from './Client';

require('f-of-s');

let app = document.getElementById('app');
render(<Client />, app);
