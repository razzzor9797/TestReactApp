import React from 'react';
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
        return{
            <div className = "Person">
                <button onClick = {this.handleClick}>{this.props.name}</button>
            </div>
        }
    }
}

