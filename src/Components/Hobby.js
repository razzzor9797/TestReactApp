import React from 'react';
import PropTypes from 'prop-types';
import './Hobby.css';
import {choosePerson} from "../actions/personActions";
import {connect} from "react-redux";
import * as API from "../APIUtils";

const url = 'http://localhost:3001/persons';

export class Hobby extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        passion: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.number
    };

    render() {
        return (
            <div className="HobbyParent">
                <div id="Passion" className="inline">{this.props.personsHobby.passion}</div>
                <div id="Hobby" className="inline">{this.props.personsHobby.hobby}</div>
                <div id="Year" className="inline">{this.props.personsHobby.year}</div>
                <div id="Delete" className="inline" onClick={this.deleteHobby.bind(this)}></div>
            </div>
        )
    }
}

function

mapStateToProps(state) {
    return {};
}

const
    mapDispatchToProps = dispatch => ({
        choosePerson: data => {
            dispatch(choosePerson(data))
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Hobby)

