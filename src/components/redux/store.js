import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";

import rootReducer from './root-redux';

const store = createStore(rootReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export  { store, persistor };