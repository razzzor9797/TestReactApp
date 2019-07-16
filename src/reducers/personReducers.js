import initialState from './initialState';
import {
    CHOOSE_PERSON,
    FETCH_PERSON
} from '../actions/actionTypes';


export default function personReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_PERSON:
            newState = {...state, personsList: action.personsList.data};
            return newState;
        case CHOOSE_PERSON:
            newState = {...state, chosenPerson: action.chosenPerson};
            return newState;
        default:
            return state;
    }
}
