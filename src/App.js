import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PersonsList from './PersonsList.js';
import HobbiesList from './HobbiesList.js';
import configureStore from './store/configureStore';

const sotre = configureStore();

const tempPersonsArr = ['Jack', 'John', 'Jill'];

class App extends React.Component {
    state = {
        chosenPerson: "Initial Value",
    };

    handlePersonChoose= ( inputValue ) =>
        this.setState({inputValue})

    render(){
        return (
        <div class="Page">
            <h2>User Hobbies</h2>
            <div class="row">
                <div class="inline"><PersonsList handlePersonChoose = {this.handlePersonChoose()} persons={tempPersonsArr}/></div>
                <div class="inline"><HobbiesList chosenPerson={this.state.chosenPerson}/></div>
            </div>
        </div>)}
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)