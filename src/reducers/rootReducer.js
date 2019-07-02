import {combineReducers} from 'redux';
import person from './personReducers';

const rootReducer = combineReducers({
    person
});

export default rootReducer;