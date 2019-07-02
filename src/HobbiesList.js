import React from 'react';
import './HobbiesList.css';
import Hobby from './Components/Hobby';

const PersonHobbies = {
    Jack: {1: {"Passion":"Low", "Hobby":"Football","Year":"2014"},
            2: {"Passion":"Low", "Hobby":"Art","Year":"2018"},
            3: {"Passion":"Mediun", "Hobby":"Cars","Year":"2010"},
            4: {"Passion":"High", "Hobby":"Music","Year":"2008"}},
    Jill: {1: {"Passion":"Low", "Hobby":"Trains","Year":"2000"},
            2:{"Passion":"High", "Hobby":"Space","Year":"2007"}},
    John: {1: {"Passion":"Medium", "Hobby":"Soccer","Year":"2019"}}
};
export default class HobbiesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {personName: props.chosenPerson};
    }


    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        const data = PersonHobbies[this.state.personName]
        if (data) {
            const hobbies = data.map(hobby => {
                return (<Hobby personsHobby={hobby}/>)
            })
        }

        return (
            <div className = "HobbiesList">
                <select className = "HobbiesListOptions" placeholder="Select passion level">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                </select>
                <input type = "text" className = "HobbiesListOptions" placeholder="Enter user hobby"/>
                <input type = "number" className = "HobbiesListOptions" min = "1950" max = "2019" placeholder="Enter year"/>
                <button className = "HobbiesListOptions">Add</button>
                <div className = "Hobbies">
                    {/*{hobbies}*/}
                </div>
            </div>
        )
    }
}

