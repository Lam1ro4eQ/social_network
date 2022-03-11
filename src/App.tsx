import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {StateType} from "./redux/state";


type PropsType = {
    state: StateType
    addPost: () => void
    addNewText: (textMessage: string) => void

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
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
