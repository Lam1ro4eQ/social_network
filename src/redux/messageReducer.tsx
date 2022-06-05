import state, {ActionType, MessagePageType, MessagesDataType, PostsDataType, StateType} from "./state";
const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE"

const messageReducer = (state: MessagePageType,action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessagesDataType = {
                id: 4,
                message: state.newMessageState
            };
            state.messagesData.push(newMessage);
            state.newMessageState = "";
            return state;
        case ADD_NEW_TEXT_MESSAGE:
            state.newMessageState = action.newTextMessage;
            return state;
        default: return state;
    }
    
}

export default messageReducer;