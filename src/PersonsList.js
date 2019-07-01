import React from 'react';
import AddPerson from 'Add.js';
import './Person.css';

export default class PersonsList extends React.Component {
    state = {
        personName: '',
        personsIds: []
    };


    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        return{
        <div className = "PersonList">
            <AddPerson className = "PersonSearch" onChange={this.handleSearch} value={personName} />
            <div className = "Person">
                <button onClick = {this.handleClick}>{this.props.name}</button>
            </div>
        </div>
        }
    }
}

