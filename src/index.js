import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
import PersonsList from './PersonsList.js';
import HobbiesList from "./HobbiesList";

const store = configureStore();

const tempPersonsArr = ['Jack', 'John', 'Jill'];

ReactDOM.render(
    <Provider store = {store}>
        <div class="Page">
            <h2>User Hobbies</h2>
            <div class="row">
                <div class="inline"><PersonsList personsList={tempPersonsArr}/></div>
                <div class="inline"><HobbiesList  chosenPerson = {store.getState()}/></div>
            </div>
        </div>
    </Provider>,
    document.getElementById("root")
);

