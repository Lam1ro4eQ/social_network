import {combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";





let rootReduser = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});


export type AppStateType = ReturnType<typeof rootReduser> //ReturnType - типизирует возвращаемый тип, typeof - типизирует функцию или объект

export const store = createStore(rootReduser);
