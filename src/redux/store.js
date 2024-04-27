// src/redux/store.js

import { createStore } from 'redux';
import rootReducer from './reducer.js'; // assuming you have a rootReducer

const store = createStore(rootReducer);

export default store;
