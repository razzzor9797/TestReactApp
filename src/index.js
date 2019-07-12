import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import PersonsList from './PersonsList.js';
import HobbiesList from "./HobbiesList";

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <div className="Page">
            <h2>User Hobbies</h2>
            <div className="row">
                <div id="PersonList" className="inline"><PersonsList/></div>
                <div id="Hobby" className="inline"><HobbiesList/></div>
            </div>
        </div>
    </Provider>,
    document.getElementById("root")
);

