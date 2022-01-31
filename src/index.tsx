import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store, {StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export let rerenderEntiretree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} addNewText={store.addNewText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntiretree(store.getState())

store.subscribe(rerenderEntiretree);


