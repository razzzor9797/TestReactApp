import * as types from './actionTypes';

let apiKey = "123";

export function receivePerson(json){
    console.log(json);
    return {type:types.RECEIVE_PERSON, person: json.person};
}

export function fetchPerson(url) {
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

// export function choosePerson(payload){
//     const action = {type: types.CHOOSE_PERSON, chosenPerson: payload};
//     console.log("personActions "+payload);
//     console.log("personActions action: " +JSON.stringify(action));
//     return action;
// }

export const choosePerson = (payload) => ({
    type: types.CHOOSE_PERSON,
    chosenPerson: payload
});


export const addPerson = (payload) => ({
    type: types.ADD_PERSON,
    newPersonName: payload
});

export const addHobby = (payload) => ({
    type: types.ADD_HOBBY,
    newHobby: payload
});

export const deleteHobby = (payload) => ({
    type: types.DELETE_HOBBY,
    hobby: payload
})

