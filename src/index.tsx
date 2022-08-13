import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store"
import StoreContext from './StoreContext';


export let rerenderEntiretree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>

                <App store={store}/>

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntiretree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntiretree(state)
});


//state={state} store={store} dispatch={store.dispatch.bind(store)}


