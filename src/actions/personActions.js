import * as types from './actionTypes';
import {CHOOSE_PERSON} from "./actionTypes";

let apiKey = "123";

export function receivePerson(json){
    console.log(json);
    return {type:types.RECEIVE_PERSON, person: json.person};
}

export function fetchPerson(url){
    // return dispatch => {
    //     return fetch(url, {
    //         method: 'GET',
    //         mode: 'cors',
    //         credentials: 'include',
    //         headers: {
    //             'x-api-key': apiKey,
    //             'Accept': 'application/json'
    //         }
    //         }) .then(res => res.text())          // convert to plain text
    //         .then(text => console.log(text))
    //         .then(response => response.json())
    //         .then(json => dispatch(receivePerson(json)));
    //     };
    }

export default function choosePerson(payload){
    console.log('1' + payload);
    return {type: CHOOSE_PERSON, chosenPerson: payload};
}
