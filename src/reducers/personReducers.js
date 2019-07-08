import initialState from './initialState';
import {ADD_HOBBY, DELETE_HOBBY, ADD_PERSON, CHOOSE_PERSON, FETCH_PERSON, RECEIVE_PERSON} from '../actions/actionTypes';


export default function personReducer(state = initialState, action) {
    let newState;
    let hobbies;
    console.log('Reducer state ' + JSON.stringify(state));
    console.log('Reducer action type ' + JSON.stringify(action.type));
    switch (action.type) {
        case FETCH_PERSON:
            newState = action.chosenPerson;
            console.log('FETCH_PERSON Action');
            return newState;
        case RECEIVE_PERSON:
            newState = action.chosenPerson;
            console.log('RECEIVE_PERSON Action');
            return newState;
        case CHOOSE_PERSON:
            newState = {...state, chosenPerson: action.chosenPerson};
            console.log('Reducer Choose person ' + JSON.stringify(newState));
            console.log('CHOOSE_PERSON Action');
            return newState;
        case ADD_PERSON:
            console.log('add person ' +JSON.stringify(action.newPersonName));
            hobbies = Object.assign({},state.Hobbies);
            hobbies[action.newPersonName] = [];
            newState ={...state, personsList: state.personsList.concat(action.newPersonName), Hobbies: hobbies};
            console.log('person added: ' +JSON.stringify((newState.personsList)));
            return newState;
        case ADD_HOBBY:
            console.log('add hobby ' +JSON.stringify(action.newHobby));
            hobbies = Object.assign({},state.Hobbies);
            hobbies[state.chosenPerson] = hobbies[state.chosenPerson].concat(action.newHobby);
            newState = {...state, Hobbies: hobbies};
            return newState;
        case DELETE_HOBBY:
            console.log('delete hobby ' +JSON.stringify(action.hobby));
            hobbies = Object.assign({},state.Hobbies);
            hobbies[state.chosenPerson] = arrayRemove(hobbies[state.chosenPerson], action.hobby);
            newState = {...state, Hobbies: hobbies};
            return newState;
        default:
            console.log('Reducer default ' + JSON.stringify(state));
            return state;
    }
}

function arrayRemove(arr, value) {

    return arr.filter(function(element){
        return element.Hobby != value;
    });

}