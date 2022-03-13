import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {ActionType, AddNewTextType, AddPostTextType, StateType, StoreType} from "./redux/state";


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
                               //state={props.state.messagePage}
                               messagePage={props.state.messagePage}
                               //dialogsData={props.state.messagePage.dialogsData}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               store={props.store}
                               profilePage={props.state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
