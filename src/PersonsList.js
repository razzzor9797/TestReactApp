import React from 'react';
import './PersonsList.css';
import Person from './Components/Person.js'

export default class PersonsList extends React.Component {
    state = {
        personsNames: [],
        personsIds: []
    };

    render() {

        const { searchString, personsIds, error } = this.state

        const data = this.props.persons

        const persons = data.map(personName => {
            return (<Person handlePersonChoose = {this.props.handlePersonChoose} name={personName}/>)
        })

        return (
        <div className = "PersonList">
            <input type = "text" className = "PersonListOptions" placeholder="Enter person name" />
            <button className = "PersonListOptions">Add</button>
            <div className = "Persons">
                {persons}
            </div>
        </div>
        )
    }
}

