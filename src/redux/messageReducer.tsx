import state, { MessagePageType, MessagesDataType, PostsDataType, StateType} from "./state";
const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE"
export type messageActionType = ReturnType<typeof addMessageActionCreator> | ReturnType<typeof addNewTextMessageActionCreator>
const messageReducer = (state: MessagePageType,action: messageActionType) => {

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
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const addNewTextMessageActionCreator = (textMessage:string) => ({type: ADD_NEW_TEXT_MESSAGE, newTextMessage: textMessage} as const)

export default messageReducer;