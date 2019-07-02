import React from 'react';
import PropTypes from 'prop-types';
import './Hobby.css';

export default class Hobby extends React.Component {
    static propTypes ={
        id: PropTypes.number,
        passion: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.number
    };

    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        return(
            <div className = "Hobby">
                <div id = "Passion" className = "inline"> </div>
                <div id = "Hobby" className = "inline"> </div>
                <div id = "Year" className = "inline"> </div>
                <div id = "Delete" classNmae = "inline"></div>
            </div>
        )
    }
}

