import React from 'react'

const AddPerson = ({ onChange, value }) => (
    <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Enter person name"
        autoFocus
    />
)

const AddHobby = ({ onChange, value }) => (
    <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Enter user hobby"
        autoFocus
    />
)

const AddPassion = ({ onChange, value }) => (
    <select
        onChange={onChange}
        value={value}
        placeholder="Select passion level"
        autoFocus>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
    </select>
)
const AddYear = ({ onChange, value }) => (
    <input
        type="number"
        onChange={onChange}
        value={value}
        min="1950"
        max="2019"
        placeholder="Enter year"
        autoFocus
    />
)

export AddPerson;
export AddHobby;
export AddPassion;
export AddYear;