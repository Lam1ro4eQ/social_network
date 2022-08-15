import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {StoreType} from "../../redux/redux-store";
import {messageActionType, addMessageActionCreator, addNewTextMessageActionCreator,} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type PropsType = {
    store: StoreType
}

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer> {
            (store) => {
                let addNewTextMessageCont = (textMessage: string) => {
                    store.dispatch(addNewTextMessageActionCreator(textMessage))
                }
                let addMessageCont = () => {
                    store.dispatch(addMessageActionCreator())
                }

                return <Dialogs addMessage={addMessageCont}
                                addNewTextMessage={addNewTextMessageCont}
                                messagePage={store.getState().messagePage}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer

