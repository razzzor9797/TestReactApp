import * as types from './actionTypes';

function url(){
    return 'www.url.com';
}

export function receivePerson(json){
    return {type:types.RECEIVE_PERSON, person: json.person};
}

export function fetchPerson(){
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
            })
            .then(response => response.json())
            .then(json => dispatch(receivePerson(json)));
        };
    }