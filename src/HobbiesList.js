import React from 'react';
import './HobbiesList.css';
import Hobby from './Components/Hobby';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import {addHobby} from './actions/personActions';


class HobbiesList extends React.Component {
    static propTypes = {
        currentPerson: propTypes.string,
        Hobbies: propTypes.object
    };
    constructor(props){
        super(props);
        console.log('HobbiesList constructor ' + JSON.stringify(this.props));
    }

    handlePassionChange(e){
        this.setState({newHobbyPassion: e.target.value});
    }

    handleHobbyNameChange(e){
        this.setState({newHobbyName: e.target.value});
    }

    handleYearChange(e){
        this.setState({newHobbyYear: e.target.value});
    }

    addNewHobby(){
        const newHobby = {Passion: this.state.newHobbyPassion, Hobby: this.state.newHobbyName, Year: this.state.newHobbyYear};
        console.log('add hobby' +JSON.stringify(newHobby));
        this.props.addHobby(newHobby);
    }

    render() {
        let hobbies = "";
        console.log('HobbiesList render '+JSON.stringify(this.props));
        const currentPerson = this.props.currentPerson;
        if(this.props.currentPerson != "") {
            const data = this.props.Hobbies[currentPerson];
            console.log('data ' + JSON.stringify(data));
            if (data) {
                hobbies = data.map(hobby => {
                    return (<Hobby key={hobby.Hobby} personsHobby={hobby}/>)
                })
            }
        }
        return (
            <div className="HobbiesList">
                <select id = "PassionOption" className="HobbiesListOptions" placeholder="Select passion level" onChange ={this.handlePassionChange.bind(this)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Very high</option>
                </select>
                <input id = "HobbyOption" type="text" className="HobbiesListOptions" placeholder="Enter user hobby" onChange ={this.handleHobbyNameChange.bind(this)}/>
                <input id = "YearOption" type="number" className="HobbiesListOptions" min="1950" max="2019" placeholder="Enter year" onChange ={this.handleYearChange.bind(this)}/>
                <button id = "AddOption" className="HobbiesListOptions" onClick = {this.addNewHobby.bind(this)}>Add</button>
                <div className="Hobbies">
                    {hobbies}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('(HobbiesList) mapStateToProps: ' +JSON.stringify(state));
    return {currentPerson: state.personReducer.chosenPerson,
    Hobbies: state.personReducer.Hobbies};
}

const mapDispatchToProps = dispatch => ({
    addHobby: data => dispatch(addHobby(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(HobbiesList)

