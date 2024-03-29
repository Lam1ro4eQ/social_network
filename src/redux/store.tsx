import React, {useState} from "react";
import {debug} from "util";
import messageReducer, {messageActionType} from "./messageReducer";
import profileReducer, {profileActionType, ProfileType} from "./profileReducer";
//import {rerenderEntiretree} from "../index";

type MessagesDataType = {
    id: number
    message: string
}
type DialogsDataType = {
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
    profile?: Array<ProfileType>
}

export type StateType = {
    // _state: Array<profilePageType | messagePageType>
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

// export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator>
//    | ReturnType<typeof addMessageActionCreator> | ReturnType<typeof addNewTextMessageActionCreator>
export type rootActionType = messageActionType | profileActionType

export type StoreType = {
    _state: StateType
    getState: () => StateType
    //addPost: () => void
    //addNewText: (textMessage: string) => void
    subscribe: (observer: any) => void
    _callSubscriber: (state: StateType) => any
    dispatch: (action: rootActionType) => void
}


// let store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: "My new post", likesCount: 12},
//                 {id: 2, message: "Hi how are you", likesCount: 11}
//             ],
//             newPostState: "",
//
//         },
//         messagePage: {
//             dialogsData: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Petr'},
//                 {id: 3, name: 'Vasya'},
//                 {id: 4, name: 'Alex'},
//             ],
//             messagesData: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra'},
//                 {id: 3, message: 'Yo'},
//             ],
//             newMessageState: ""
//         }
//     },
//
//     getState() {
//         return this._state
//     },
//
//     subscribe(observer: any) {
//         this._callSubscriber = observer;
//     },
//
//     _callSubscriber() {
//         console.log('State changet')
//     },
//
//     dispatch(action ) {
//
//         this._state.messagePage = messageReducer(this._state.messagePage, action as messageActionType)
//         this._state.profilePage = profileReducer(this._state.profilePage, action as profileActionType)
//
//         // if (action.type === 'ADD-POST') {
//         //     let newPost: PostsDataType = {
//         //         id: 5,
//         //         message: this._state.profilePage.newPostState,
//         //         likesCount: 0
//         //     };
//         //     this._state.profilePage.postsData.push(newPost);
//         //     this._state.profilePage.newPostState = "";
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === 'ADD-NEW-TEXT') {
//         //     this._state.profilePage.newPostState = action.newText;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === 'ADD-MESSAGE') {
//         //     let newMessage: MessagesDataType = {
//         //         id: 4,
//         //         message: this._state.messagePage.newMessageState
//         //     };
//         //     this._state.messagePage.messagesData.push(newMessage);
//         //     this._state.messagePage.newMessageState = "";
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === 'ADD-NEW-TEXT-MESSAGE') {
//         //     this._state.messagePage.newMessageState = action.newTextMessage;
//             this._callSubscriber(this._state);
//         // }
//     }
// }


// export default store

//@ts-ignore
window.store = store