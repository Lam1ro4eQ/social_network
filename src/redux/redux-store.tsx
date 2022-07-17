import {combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";





let redusers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer
});

let store = createStore(redusers);

export default store;