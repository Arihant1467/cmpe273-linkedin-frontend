import {createStore, applyMiddleware,compose} from 'redux';
import storeManager from './../../reducers/allreducer.js';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  storeManager,
  compose(applyMiddleware(thunk, promise)),
);

/*
const middleware = [thunk]

/*
const store = createStore(
    rootReducer,
    appState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


const store = createStore(
  rootReducer,
  appState,
  compose(
      applyMiddleware(...middleware)
  )
);

*/

export default store;
