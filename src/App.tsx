import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {StateType, StoreType} from "./redux/store";
import {FC} from "react";
import {messageActionType} from "./redux/messageReducer";
import {profileActionType} from "./redux/profileReducer";


type PropsType = {
    store: StoreType
    state: StateType
    //addPost: () => void
    //addNewText: (textMessage: string) => void
    dispatch: (action: messageActionType | profileActionType) => void
}
const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>

                    <Route path='/dialogs'
                           render={() => <Dialogs/>}/>
                    <Route path='/profile'
                           render={() => <Profile/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}
//    store={props.store}   messagePage={props.state.messagePage}  dispatch={props.store.dispatch.bind(props.store)}
//    store={props.store} profilePage={props.state.profilePage}     dispatch={props.store.dispatch.bind(props.store)}

export default App;


