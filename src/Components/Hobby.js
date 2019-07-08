import React from 'react';
import PropTypes from 'prop-types';
import './Hobby.css';
import {deleteHobby} from "../actions/personActions";
import {connect} from "react-redux";

export class Hobby extends React.Component {
    static propTypes ={
        id: PropTypes.number,
        passion: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.number
    };

    deleteHobby(e){
        this.props.deleteHobby(this.props.personsHobby.Hobby);
    }

    render() {
        return(
            <div className = "HobbyParent">
                <div id = "Passion" className = "inline">{this.props.personsHobby.Passion}</div>
                <div id = "Hobby" className = "inline">{this.props.personsHobby.Hobby}</div>
                <div id = "Year" className = "inline">{this.props.personsHobby.Year}</div>
                <div id = "Delete" className = "inline" onClick = {this.deleteHobby.bind(this)}> </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        //persons: state.persons
    };
}
const mapDispatchToProps = dispatch => ({
    deleteHobby: data => {
        dispatch(deleteHobby(data))}
});

export default connect(mapStateToProps,mapDispatchToProps)(Hobby)

