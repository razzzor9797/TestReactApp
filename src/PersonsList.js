import React from 'react';
import './PersonsList.css';
import Person from './Components/Person.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import choosePerson from './actions/personActions';
import PropTypes from 'prop-types';

export function PersonsList({personsList, choosePerson}){
    // clickHandler(e, name) { // HERE WE ARE TRIGGERING THE ACTION
    //     console.log('2' + JSON.stringify(e));
    //     //personActions.choosePerson(e);
    // }

    return(
        <div className = "PersonList">
            <input type = "text" className = "PersonListOptions" placeholder="Enter person name" />
            <button className = "PersonListOptions">Add</button>
            <div className = "Persons">
                {personsList.map(personName => {
                    return (<Person choosePerson = {choosePerson} person = {personName}/>)
                })}
            </div>
        </div>
    )
}

PersonsList.propTypes = {
    personActions: PropTypes.object,
    persons: PropTypes.array
};

function mapStateToProps(state) {
    return {
        //persons: state.persons
    };
}
const mapDispatchToProps = dispatch => ({
    choosePerson: data => {
        dispatch(choosePerson(data))}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonsList);

