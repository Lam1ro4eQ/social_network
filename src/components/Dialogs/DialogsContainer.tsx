import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagePageType,StoreType} from "../../redux/store";
import { messageActionType, addMessageActionCreator,addNewTextMessageActionCreator,} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

type PropsType = {
    messagePage: MessagePageType
    store: StoreType
    dispatch: (action: messageActionType) => void
}

const DialogsContainer = (props: PropsType) => {

    let dialogsMap = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>) //мапим данные для отрисовки

    let messagesMap = props.messagePage.messagesData.map(message => <Message message={message.message}/>) //мапим данные для отрисовки
    let newMessageState = props.messagePage.newMessageState
    // let newMessageElement = React.createRef<HTMLTextAreaElement>(); //ссылка для textarea


    let addNewTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = e.currentTarget.value;
        props.dispatch(addNewTextMessageActionCreator(textMessage))
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs messagePage={props.store.getState().messagePage} store={props.store} dispatch={props.dispatch}/>
    )
}

export default DialogsContainer

