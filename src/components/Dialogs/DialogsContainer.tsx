import React from "react";

import {StoreType} from "../../redux/redux-store";
import {addMessageActionCreator, addNewTextMessageActionCreator,} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";

type PropsType = {
    store: StoreType
}


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        addNewTextMessage: (textMessage: string) => {
            dispatch(addNewTextMessageActionCreator(textMessage))
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer

