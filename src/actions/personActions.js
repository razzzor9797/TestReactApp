import * as types from './actionTypes';

export const fetchPerson = (payload) => ({
    type: types.FETCH_PERSON,
    personsList: payload
});

export const choosePerson = (payload) => ({
    type: types.CHOOSE_PERSON,
    chosenPerson: payload
});
