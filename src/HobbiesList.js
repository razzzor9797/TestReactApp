import React from 'react';
import './Person.css';

export default class PersonsList extends React.Component {
    state = {
        searchString: '',
        personsIds: []
    };


    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        return{
        <div className = "Person">
            <button onClick = {this.handleClick}>{this.props.name}</button>
        </div>
    }
    }
}

