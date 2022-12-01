import state, {MessagePageType, MessagesDataType, PostsDataType, rootActionType, StateType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE"
export type messageActionType =
    ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof addNewTextMessageActionCreator>


let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Alex'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ],
    newMessageState: ""
}


const messageReducer = (state: MessagePageType = initialState, action: messageActionType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessagesDataType = {
                id: 4,
                message: state.newMessageState
            };
            return {...state, messagesData: [...state.messagesData, newMessage],
                newMessageState: ''}
        }
        case ADD_NEW_TEXT_MESSAGE: {
            return {...state,newMessageState: action.newTextMessage}
        }
        default:
            return state;
    }

}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const addNewTextMessageActionCreator = (textMessage: string) => ({
    type: ADD_NEW_TEXT_MESSAGE,
    newTextMessage: textMessage
} as const)

export default messageReducer;