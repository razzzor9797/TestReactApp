import React from 'react';
import './HobbiesList.css';
import Hobby from './Hobby';

export default class HobbiesList extends React.Component {
    state = {
        searchString: '',
        personsIds: []
    };


    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        const data = this.props.hobbies
        if (data) {
            const hobbies = data.map(hobby => {
                return (<Hobby name={hobby}/>)
            })
        }

        return (
            <div className = "PersonList">
                <select className = "inline" placeholder="Select passion level">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                </select>
                <input type = "text" className = "inline" placeholder="Enter user hobby"/>
                <input type = "number" className = "inline" placeholder="Enter year"/>
                <button className = "inline">Add</button>
                {/*{hobbies}*/}
            </div>
        )
    }
}

