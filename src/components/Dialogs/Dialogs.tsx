import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagePageType,StoreType} from "../../redux/store";
import { messageActionType, addMessageActionCreator, addNewTextMessageActionCreator} from "../../redux/messageReducer";

type PropsType = {
    messagePage: MessagePageType
    addMessage: () => void
    addNewTextMessage: (textMessage:string) => void
}

const Dialogs = (props: PropsType) => {

    let dialogsMap = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>) //мапим данные для отрисовки

    let messagesMap = props.messagePage.messagesData.map(message => <Message message={message.message}/>) //мапим данные для отрисовки
    let newMessageState = props.messagePage.newMessageState
    // let newMessageElement = React.createRef<HTMLTextAreaElement>(); //ссылка для textarea


    let addNewTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = e.currentTarget.value;
        props.addNewTextMessage(textMessage)
        // props.dispatch(addNewTextMessageActionCreator(textMessage))
    }
    let addMessage = () => {
        props.addMessage()
        // props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsMap}
            </div>
            <div className={s.messages}>
                text
                <div>{messagesMap}</div>
                <div><textarea value={newMessageState} onChange={addNewTextMessage}/></div>
                <div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs

// value={props.messagePage.newMessageState}
// ref={newMessageElement}