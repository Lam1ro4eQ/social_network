import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagePageType} from "../../redux/state";
type PropsType = {
    messagePage: MessagePageType
}

const Dialogs = (props: PropsType) => {

     let dialogsMap = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>) //мапим данные для отрисовки

     let messagesMap = props.messagePage.messagesData.map(message => <Message message={message.message}/>) //мапим данные для отрисовки

     let newMessageElement = React.createRef<HTMLTextAreaElement>(); //ссылка для textarea
     let textMessage = () => {
             alert(newMessageElement.current?.value);
     } // ? - если есть

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsMap}
            </div>
            <div className={s.messages}>
                text
                {messagesMap}
                <textarea ref={newMessageElement}/>
                <button onClick={textMessage}>Отправить сообщение</button>
            </div>

        </div>
    )
}

export default Dialogs