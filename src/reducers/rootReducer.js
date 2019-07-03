import {combineReducers} from 'redux';
import personReducer from './personReducers';

const rootReducer = () => {
    //console.log('8');
    combineReducers({
        personReducer
    });
}

export default rootReducer;