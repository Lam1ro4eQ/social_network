import {combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";





let rootReduser = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReduser
});


export type AppStateType = ReturnType<typeof rootReduser>

export const store = createStore(rootReduser);
