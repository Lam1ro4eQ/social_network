import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {AppStateType} from "./redux/redux-store";
import {FC} from "react";
import {messageActionType} from "./redux/messageReducer";
import {profileActionType} from "./redux/profileReducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: AppStateType
    //addPost: () => void
    //addNewText: (textMessage: string) => void
    dispatch?: (action: messageActionType | profileActionType) => void
}
const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>

                    <Route path='/profile'
                           render={() => <Profile />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}
//    store={props.store}   messagePage={props.state.messagePage}  dispatch={props.store.dispatch.bind(props.store)}
//    store={props.store} profilePage={props.state.profilePage}     dispatch={props.store.dispatch.bind(props.store)}

export default App;


