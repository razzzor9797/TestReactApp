import React from 'react';
import './HobbiesList.css';
import Hobby from './Components/Hobby';
import {connect} from "react-redux";
import {choosePerson} from './actions/personActions';
import {get, post} from './APIUtils';

const url = 'http://localhost:3001/persons';

class HobbiesList extends React.Component {
    handlePassionChange(e) {
        this.setState({newHobbyPassion: e.target.value});
    }

    handleHobbyNameChange(e) {
        this.setState({newHobbyName: e.target.value});
    }

    handleYearChange(e) {
        this.setState({newHobbyYear: e.target.value});
    }

    addNewHobby() {
        const personId = this.props.currentPerson.data._id;
        const newHobby = {
            passion: this.state.newHobbyPassion,
            hobby: this.state.newHobbyName,
            year: this.state.newHobbyYear
        };
        post(url.concat('/' + personId + '/hobbies'), newHobby).then(() => {
            get(url.concat('/' + personId + '/hobbies')).then((res) => {
                this.props.choosePerson(res);
            });
        })
    }

    render() {
        let hobbies = "";
        if (this.props.currentPerson !== "") {
            const data = this.props.currentPerson.data.hobbies;
            if (data) {
                hobbies = data.map(hobby => {
                    return (<Hobby key={hobby._id} personId={this.props.currentPerson.data._id}
                                   personsHobby={hobby}/>)
                })
            }
        }
        return (
            <div className="HobbiesList">
                <select id="PassionOption" className="HobbiesListOptions" placeholder="Select passion level"
                        onChange={this.handlePassionChange.bind(this)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Very high</option>
                </select>
                <input id="HobbyOption" type="text" className="HobbiesListOptions" placeholder="Enter user hobby"
                       onChange={this.handleHobbyNameChange.bind(this)}/>
                <input id="YearOption" type="number" className="HobbiesListOptions" min="1950" max="2019"
                       placeholder="Enter year" onChange={this.handleYearChange.bind(this)}/>
                <button id="AddOption" className="HobbiesListOptions" onClick={this.addNewHobby.bind(this)}>Add</button>
                <div className="Hobbies">
                    {hobbies}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentPerson: state.personReducer.chosenPerson,
    };
}

const mapDispatchToProps = dispatch => ({
    choosePerson: data => {
        dispatch(choosePerson(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList)

