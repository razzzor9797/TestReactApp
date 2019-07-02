import initialState from './initialState';
import {FETCH_PERSON, RECEIVE_PERSON} from '../actions/actionTypes';

export default function person(state = initialState.person, action) {
    let newState;
    switch(action.type) {
        case FETCH_PERSON:
            console.log('FETCH_PERSON Action');
            return action;
        case RECEIVE_PERSON:
            newState = action.person;
            console.log('RECEIVE_PERSON Action');
            return newState;
        default:
            return state;
    }
}