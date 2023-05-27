import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { addReducer } from "./addReducer";
export const rootReducer=combineReducers({loginReducer,addReducer})