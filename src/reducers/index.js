import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

//combine all reducer and return to global state to will be access
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
