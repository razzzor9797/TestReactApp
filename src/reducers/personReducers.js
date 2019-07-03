import initialState from './initialState';
import {CHOOSE_PERSON, FETCH_PERSON, RECEIVE_PERSON} from '../actions/actionTypes';

export default function personReducer(state = initialState, action) {
    let newState;
    console.log('6'+JSON.stringify(state));
    switch(action.type) {
        case FETCH_PERSON:
            newState = action.chosenPerson;
            console.log('FETCH_PERSON Action');
            return newState;
        case RECEIVE_PERSON:
            newState = action.chosenPerson;
            console.log('RECEIVE_PERSON Action');
            return newState;
        case CHOOSE_PERSON:
            newState = state;
            newState.chosenPerson = action.chosenPerson;
            console.log('6.1'+JSON.stringify(newState));
            console.log('CHOOSE_PERSON Action');
            return newState;
        default:
            return state;
    }
}
