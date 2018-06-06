import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//combine all reducer and return into libraries
export default combineReducers ({
    libraries: LibraryReducer
});