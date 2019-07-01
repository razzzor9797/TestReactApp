import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './App.css';
import PersonsList from 'PersonsList.js';
import HobbiesList from 'HobbiesList.js';

render(
    <div className="Page">
        <PersonsList/>
        <HobbiesList/>
    </div>
)