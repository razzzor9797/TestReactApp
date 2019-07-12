import React from 'react';
import './PersonsList.css';
import {connect} from 'react-redux';
import {choosePerson, fetchPerson} from './actions/personActions';
import * as API from './APIUtils';
import Person from "./Components/Person"

const url = 'http://localhost:3001/persons';

//@connect(mapStateToProps, mapDispatchToProps)
class PersonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {personsList: ""};
    }

    componentDidMount() {
        this.props.fetchPersonAPI(url);
    }

    clickHandler(e) {
        const action = {};
        choosePerson(action);
    }

    handleNewPersonName(e) {
        this.setState({newPersonName: e.target.value});
    }

    addNewPerson() {
        API.post(url, {name: this.state.newPersonName});
        this.props.fetchPersonAPI(url);
    };

    render() {
        const persons = this.props.personsList.map(person => {
            return (
                <Person key={person._id} choosePerson={this.clickHandler} person={person}/>)
        });
        return <div className="PersonList">
            <input id="newPersonName" type="text" className="PersonListOptions" placeholder="Enter person name"
                   onChange={this.handleNewPersonName.bind(this)}/>
            <button className="PersonListOptions" onClick={this.addNewPerson.bind(this)}>Add</button>
            <div className="Persons">
                {persons}
            </div>
        </div>
    }
}

function fetchPersonAPI(url, dispatch) {
    return API.get(url).then((res) => dispatch(fetchPerson(res)));
}

function mapStateToProps(state) {
    return {personsList: state.personReducer.personsList};
}

const mapDispatchToProps = dispatch => ({
    fetchPersonAPI: url => fetchPersonAPI(url, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList)
