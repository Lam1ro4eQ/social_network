import React, {useState} from "react";
import {debug} from "util";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
//import {rerenderEntiretree} from "../index";

export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export type MessagePageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageState: string
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostState: string
}

export type StateType = {
    // _state: Array<profilePageType | messagePageType>
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator>
    | ReturnType<typeof addMessageActionCreator> | ReturnType<typeof addNewTextMessageActionCreator>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    //addPost: () => void
    //addNewText: (textMessage: string) => void
    subscribe: (observer: any) => void
    _callSubscriber: (state: StateType) => any
    dispatch: (action: ActionType) => void
}

const ADD_NEW_TEXT = "ADD-NEW-TEXT"
const ADD_POST = "ADD-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE"

let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "My new post", likesCount: 12},
                {id: 2, message: "Hi how are you", likesCount: 11}
            ],
            newPostState: ""
        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Petr'},
                {id: 3, name: 'Vasya'},
                {id: 4, name: 'Alex'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
            ],
            newMessageState: ""
        }
    },

    getState() {
        return this._state
    },

    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log('State changet')
    },

    dispatch(action) {

        messageReducer(this._state.messagePage, action)
        profileReducer(this._state.profilePage, action)

        // if (action.type === 'ADD-POST') {
        //     let newPost: PostsDataType = {
        //         id: 5,
        //         message: this._state.profilePage.newPostState,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.postsData.push(newPost);
        //     this._state.profilePage.newPostState = "";
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'ADD-NEW-TEXT') {
        //     this._state.profilePage.newPostState = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'ADD-MESSAGE') {
        //     let newMessage: MessagesDataType = {
        //         id: 4,
        //         message: this._state.messagePage.newMessageState
        //     };
        //     this._state.messagePage.messagesData.push(newMessage);
        //     this._state.messagePage.newMessageState = "";
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'ADD-NEW-TEXT-MESSAGE') {
        //     this._state.messagePage.newMessageState = action.newTextMessage;
        //     this._callSubscriber(this._state);
        // }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const addNewTextActionCreator = (text:string) => ({type: ADD_NEW_TEXT, newText: text} as const)
export const addNewTextMessageActionCreator = (textMessage:string) => ({type: ADD_NEW_TEXT_MESSAGE, newTextMessage: textMessage} as const)

export default store

//@ts-ignore
window.store = store