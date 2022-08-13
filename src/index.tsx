import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store"
import StoreContext from './StoreContext';


export let rerenderEntiretree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
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


