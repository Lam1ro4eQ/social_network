import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {StoreType} from "../../redux/redux-store";
import { messageActionType, addMessageActionCreator,addNewTextMessageActionCreator,} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer = (props: PropsType) => {

    let addNewTextMessageCont = (textMessage:string) => {
        props.store.dispatch(addNewTextMessageActionCreator(textMessage))
    }
    let addMessageCont = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs addMessage={addMessageCont} addNewTextMessage={addNewTextMessageCont} messagePage={props.store.getState().messagePage}/>
    )
}

export default DialogsContainer

