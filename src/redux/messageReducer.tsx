import {MessagesDataType, PostsDataType} from "./state";
const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE"
const messageReducer (state,action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage: MessagesDataType = {
            id: 4,
            message: state.newMessageState
        };
        state.messagesData.push(newMessage);
        state.newMessageState = "";
    } else if (action.type === ADD_NEW_TEXT_MESSAGE) {
        state.newMessageState = action.newTextMessage;
    }

    return state;
}

export default messageReducer;