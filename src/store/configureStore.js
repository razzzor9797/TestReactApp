import {createStore} from "redux";
import rootReducer from '../reducers/rootReducer';
import initialState from "../reducers/initialState";

export default function configureStore() {
    // sagaMiddleware = createSagaMiddleware();
    return createStore(
        rootReducer(),
        //applyMiddleware(sagaMiddleware),
        initialState
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // applyMiddleware(thunk)
    );
}
