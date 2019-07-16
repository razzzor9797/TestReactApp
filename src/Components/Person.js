import React from 'react';
import './Person.css';
import {choosePerson} from "../actions/personActions";
import {connect} from "react-redux";
import * as API from "../APIUtils";

const url = 'http://localhost:3001/persons';

export class Person extends React.Component {
    render() {
        const value = this.props.person._id;
        return (
            <div className="Person" onClick={() => {
                API.get(url.concat('/' + value + "/hobbies"))
                    .then((res) => {
                        this.props.choosePerson(res)
                    });
            }}>{this.props.person.name}</div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = dispatch => ({
    choosePerson: data => {
        dispatch(choosePerson(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Person)