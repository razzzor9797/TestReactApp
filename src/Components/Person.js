import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

export default class Person extends React.Component {
     static propTypes ={
         id: PropTypes.number,
         name: PropTypes.string
     };

    render() {
        const value = this.props.person;
        return(
            <div className = "Person" onClick={() => this.props.choosePerson(value)}>{this.props.person}</div>
        )
    }
}

