import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

export default class Person extends React.Component {
     static propTypes ={
         id: PropTypes.number,
         name: PropTypes.string
     };

    render() {
        return(
            <div className = "Person" onClick = {(e) => this.props.handlePersonChoose(e.target.value)}>{this.props.name}</div>
        )
    }
}

