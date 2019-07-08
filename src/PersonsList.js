import React from 'react';
import './PersonsList.css';
import Person from './Components/Person.js'
import {connect} from 'react-redux';
import {choosePerson, addPerson} from './actions/personActions';
import propTypes from 'prop-types';
import initialState from "./reducers/initialState";


//@connect(mapStateToProps, mapDispatchToProps)
class PersonsList extends React.Component{
    constructor(props) {
        super(props);
    }

     clickHandler(e) { // HERE WE ARE TRIGGERING THE ACTION
         choosePerson(e);
    }

    handleNewPersonName(e){
        this.setState({newPersonName: e.target.value});
    }

    addNewPerson(){
        console.log(JSON.stringify(this.state.newPersonName));
        this.props.addPerson(this.state.newPersonName);
    };

    render(){
        return <div className = "PersonList">
            <input id = "newPersonName" type = "text" className = "PersonListOptions" placeholder="Enter person name" onChange = {this.handleNewPersonName.bind(this)}/>
            <button className = "PersonListOptions" onClick = {this.addNewPerson.bind(this)}>Add</button>
            <div className = "Persons">
                {this.props.personsList.map(personName => {
                    return (<Person key={personName} choosePerson = {this.clickHandler} person = {personName}/>)
                })}
            </div>
        </div>
    }
}


function mapStateToProps(state) {
    console.log('(PersonsList) mapStateToProps: ' +JSON.stringify(state.personReducer.personsList));
    return {personsList: state.personReducer.personsList};
}
const mapDispatchToProps = dispatch => ({
    addPerson: data => dispatch(addPerson(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(PersonsList)
