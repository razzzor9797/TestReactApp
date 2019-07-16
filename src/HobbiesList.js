import React from 'react';
import './HobbiesList.css';
import Hobby from './Components/Hobby';
import {connect} from "react-redux";
import {choosePerson} from './actions/personActions';
import * as API from './APIUtils';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MaterialTable from 'material-table';
import {
    FormControl,
    InputLabel,
} from "@material-ui/core";

const makeGrid = (data) => {
}
const url = 'http://localhost:3001/persons';

class HobbiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newHobbyPassion: ""};
    }
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
        const personId = this.props.currentPerson._id;
        const newHobby = {
            passion: this.state.newHobbyPassion,
            hobby: this.state.newHobbyName,
            year: this.state.newHobbyYear
        };
        API.post(url.concat('/' + personId + '/hobbies'), newHobby).then(() => {
            API.get(url.concat('/' + personId + '/hobbies')).then((res) => {
                this.props.choosePerson(res);
            });
        })
    }


    deleteHobby(hobby) {
        console.log(JSON.stringify(this.props));
         API.del(url.concat('/' + this.props.currentPerson._id + '/hobbies/' + hobby._id)).then(() => {
             API.get(url.concat('/' + hobby.personId + '/hobbies')).then((res) => {
                 this.props.choosePerson(res);
             });
         });
    }
    render() {
        return (
            <Grid container className="MuiGrid-container"
                  spacing={2}
                  direction="column"
                  justify="center"
                  alignItems="center">
                <Grid item>
                    <form className = "newHobbyForm">
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="PassionOption">Choose passion</InputLabel>
                        <Select id="PassionOption" value = {this.state.newHobbyPassion}
                                onChange={this.handlePassionChange.bind(this)}>
                            <MenuItem value = "Low">Low</MenuItem>
                            <MenuItem value = "Medium">Medium</MenuItem>
                            <MenuItem value = "High">High</MenuItem>
                            <MenuItem value = "Very high">Very high</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="HobbyOption">Hobby</InputLabel>
                        <Input id="HobbyOption" type="text"
                           onChange={this.handleHobbyNameChange.bind(this)}/>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="YearOption">Year</InputLabel>
                        <Input id="YearOption" type="number" min="1950" max="2019"
                            onChange={this.handleYearChange.bind(this)}/>
                    </FormControl>
                    <Button id="AddOption" className="HobbiesListOptions" onClick={this.addNewHobby.bind(this)}>Add</Button>
                    </form>
                </Grid>
                <Grid item>
                    <MaterialTable
                        title="Hobbies"
                        columns={[{ title: 'Passion', field: 'passion' },
                            {title:'Hobby', field:'hobby'},
                            {title:'Year', field:'year'}]}
                        data={this.props.currentPerson.hobbies}
                        editable={{
                            onRowDelete: hobby => {
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        this.deleteHobby(hobby)
                                    }, 600);})
                            }
                        }}
                    />
                </Grid>
            </Grid>
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

