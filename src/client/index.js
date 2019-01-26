import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/dist/css/react-widgets.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faPlane);

ReactDOM.render(<App />, document.getElementById('root'));
