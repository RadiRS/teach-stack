import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

//combine all reducer and return into libraries
export default combineReducers({
  libraries: LibraryReducer,
  seletedLibraryID: SelectionReducer
});
