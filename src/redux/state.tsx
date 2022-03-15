import React, {useState} from "react";
import {debug} from "util";
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

export type AddPostTextType = {
    type: 'ADD-POST'
}

export type AddNewTextType = {
    type: 'ADD-NEW-TEXT'
    newText: string
}

export type ActionType = AddPostTextType | AddNewTextType

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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost: PostsDataType = {
                id: 5,
                message: this._state.profilePage.newPostState,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostState = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-NEW-TEXT') {
            this._state.profilePage.newPostState = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const addNewTextActionCreator = (text) => {
    return {
        type: ADD_NEW_TEXT,
        newText: text
    }
}

export default store

//@ts-ignore
window.store = store