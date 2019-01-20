import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import DT from './utils/devtools';



function _applyMiddleware(){
    const middleware=[

    ];
    return applyMiddleware(...middleware);
}


export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware(),
        DT.instrument()
    )(createStore)(rootReducer, initialState);
    return store;
}