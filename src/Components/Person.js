import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import {choosePerson} from "../actions/personActions";
import {connect} from "react-redux";

export class Person extends React.Component {
     static propTypes ={
         id: PropTypes.number,
         person: PropTypes.string
     };

    render() {
        const value = this.props.person;
        return(
            <div className = "Person" onClick={() => this.props.choosePerson(value)}>{this.props.person}</div>
        )
    }
}
function mapStateToProps(state) {
    return {
        //persons: state.persons
    };
}
const mapDispatchToProps = dispatch => ({
    choosePerson: data => {
        dispatch(choosePerson(data))}
});

export default connect(mapStateToProps,mapDispatchToProps)(Person)
