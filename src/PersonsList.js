import React from 'react';
import './PersonsList.css';
import Person from './Person.js'

export default class PersonsList extends React.Component {
    state = {
        personsNames: [],
        personsIds: []
    };


    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {

        const { searchString, personsIds, error } = this.state

        const data = this.props.persons

        const persons = data.map(personName => {
            return (<Person name={personName}/>)
        })

        return (
        <div className = "PersonList">
            <input type = "text" className = "AddPerson" placeholder="Enter person name" onChange={this.handleSearch} value={this.personName} />
            {persons}
        </div>
        )
    }
}

