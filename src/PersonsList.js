import React from 'react';
import './PersonsList.css';
import {connect} from 'react-redux';
import {choosePerson, fetchPerson} from './actions/personActions';
import * as API from './APIUtils';
import Person from "./Components/Person"
import MDCList from '@material-ui/core/List';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {
    FormControl,
    InputLabel,
} from "@material-ui/core";



const url = 'http://localhost:3001/persons';

//@connect(mapStateToProps, mapDispatchToProps)
class PersonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {personsList: ""};
    }

    componentDidMount() {
        this.props.fetchPersonAPI(url);
        //const personsList = new MDCList(document.getElementById('personsList'));
        //personsList.singleSelection = true;
    }

    clickHandler(e) {
        this.props.choosePerson(e);
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
                <ListItem className = "person">
                    <ListItemText key={person._id} onClick={() => this.clickHandler(person)} person = {person} primary={person.name}/>
                </ListItem>)
        });
        return <Grid className="PersonList">
            <form className = "newHobbyForm">
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="Name">Name</InputLabel>
                    <Input id="Name" type="text"
                           onChange={this.handleNewPersonName.bind(this)}/>
                </FormControl>
                <Button id="AddOption" onClick={this.addNewPerson.bind(this)}>Add</Button>
            </form>
            <List id = "personsList">
                {persons}
            </List>
        </Grid>
    }
}

function fetchPersonAPI(url, dispatch) {
    return API.get(url).then((res) => dispatch(fetchPerson(res)));
}

function mapStateToProps(state) {
    return {personsList: state.personReducer.personsList};
}

const mapDispatchToProps = dispatch => ({
    fetchPersonAPI: url => fetchPersonAPI(url, dispatch),
    choosePerson: (data) => dispatch(choosePerson(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList)
