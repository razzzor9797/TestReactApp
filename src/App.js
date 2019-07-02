import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PersonsList from './PersonsList.js';
import HobbiesList from './HobbiesList.js';


const tempPersonsArr = ['Jack', 'John', 'Jill'];

const tempPersonHobbies = [];

const element = (
    <div className="Page">
        <h2>User Hobbies</h2>
        <div classname = "inline"><PersonsList persons = {tempPersonsArr}/></div>
        <div classname = "inline"><HobbiesList /></div>
    </div>
)

ReactDOM.render(element,
        document.getElementById('root'))