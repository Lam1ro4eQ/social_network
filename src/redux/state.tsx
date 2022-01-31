import React, {useState} from "react";
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

export type StoreType = {
    _state: StateType
    getState: () => StateType
    addPost: () => void
    addNewText: (textMessage: string) => void
    subscribe: (observer: any) => void
    _callSubscriber: () => any
}

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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostState,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostState = "";
        this._callSubscriber();
    },

   addNewText(textMessage: string)  {
        let newText = textMessage;
        this._state.profilePage.newPostState = newText;
        this._callSubscriber();
    },

    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {console.log('State changet')}
}



export default store

//@ts-ignore
window.store = store