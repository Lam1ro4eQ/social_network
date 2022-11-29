import React from "react";

import {AppStateType} from "../../redux/redux-store";
import {addMessageActionCreator, addNewTextMessageActionCreator,} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state:AppStateType) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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

