import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {ActionType, StateType, StoreType} from "./redux/state";
import {FC} from "react";


type PropsType = {
    store: StoreType
    state: StateType
    //addPost: () => void
    //addNewText: (textMessage: string) => void
    dispatch: (action: ActionType) => void
}
const App = (props: PropsType) => {
    console.log(props.state.profilePage)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               store={props.store}
                               messagePage={props.state.messagePage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               store={props.store}
                               profilePage={props.state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


