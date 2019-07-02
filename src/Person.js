import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

export default class Person extends React.Component {
     static propTypes ={
         id: PropTypes.number,
         name: PropTypes.string
     };

    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        return(
            <div className = "Person" onClick = {this.handleClick}>{this.props.name}</div>
        )
    }
}

