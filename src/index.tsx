import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import  {StateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store"



export let rerenderEntiretree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntiretree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntiretree(state)
});


