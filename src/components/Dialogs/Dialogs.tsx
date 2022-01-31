import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props: any) => {

    // let dialogsMap = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>) //мапим данные для отрисовки
    //
    // let messagesMap = props.state.messagesData.map(message => <Message message={message.message}/>) //мапим данные для отрисовки
    //
    // let newMessageElement = React.createRef();
    // let textMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text);
    // }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {/*{dialogsMap}*/}
            </div>
            <div className={s.messages}>
                text
                {/*{messagesMap}*/}
                {/*<textarea ref={newMessageElement}></textarea>*/}
                {/*<button onClick={textMessage}>Отправить сообщение</button>*/}
            </div>

        </div>
    )
}

export default Dialogs