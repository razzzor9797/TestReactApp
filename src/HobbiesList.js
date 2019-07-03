import React from 'react';
import './HobbiesList.css';
import Hobby from './Components/Hobby';
import {connect} from "react-redux";

const PersonHobbies = {
    Jack: {1: {"Passion":"Low", "Hobby":"Football","Year":"2014"},
            2: {"Passion":"Low", "Hobby":"Art","Year":"2018"},
            3: {"Passion":"Mediun", "Hobby":"Cars","Year":"2010"},
            4: {"Passion":"High", "Hobby":"Music","Year":"2008"}},
    Jill: {1: {"Passion":"Low", "Hobby":"Trains","Year":"2000"},
            2:{"Passion":"High", "Hobby":"Space","Year":"2007"}},
    John: {1: {"Passion":"Medium", "Hobby":"Soccer","Year":"2019"}}
};
export class HobbiesList extends React.Component {
    constructor(props){
        super(props);
        console.log('5' + JSON.stringify(this.props));
    }


    handleClick = () => {
        this.props.clickHandler(this.props.id)
    };

    render() {
        console.log('4'+JSON.stringify(this.props));
        if(this.props.ChosenPerson == null)
            return null;
        const data = PersonHobbies[this.props.ChosenPerson];
        if (data) {
            const hobbies = data.map(hobby => {
                return (<Hobby personsHobby={hobby}/>)
            })

            return (
                <div className="HobbiesList">
                    <select className="HobbiesListOptions" placeholder="Select passion level">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <input type="text" className="HobbiesListOptions" placeholder="Enter user hobby"/>
                    <input type="number" className="HobbiesListOptions" min="1950" max="2019" placeholder="Enter year"/>
                    <button className="HobbiesListOptions">Add</button>
                    <div className="Hobbies">
                        {hobbies}
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        ChosenPerson: state.ChosenPerson
    };
};
export default connect(
    mapStateToProps,
    null
)(HobbiesList);

