import {combineReducers} from 'redux';
import personReducer from './personReducers';

const rootReducer = () => {
    //console.log('8');
    return combineReducers({
        personReducer
    });
};

export default rootReducer;