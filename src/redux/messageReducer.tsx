
const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE"
export type messageActionType =
    ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof addNewTextMessageActionCreator>

export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Alex'},
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ] as Array<MessagesDataType>,
    newMessageState: ""
}
export type InitialStateType = typeof initialState



const messageReducer = (state: InitialStateType = initialState, action: messageActionType):InitialStateType => {
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