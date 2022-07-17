import {PostsDataType, ProfilePageType, rootActionType} from "./store";

const ADD_NEW_TEXT = "ADD-NEW-TEXT"
const ADD_POST = "ADD-POST"
export type profileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator>

let initialState = {
    postsData: [
        {id: 1, message: "My new post", likesCount: 12},
        {id: 2, message: "Hi how are you", likesCount: 11}
    ],
    newPostState: ""
}

const profileReducer = (state:ProfilePageType = initialState, action: profileActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 5,
                message: state.newPostState,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostState = "";
            return state;
        case ADD_NEW_TEXT:
            state.newPostState = action.newText;
            return state;
        default: return state;
    }


    }
export const addNewTextActionCreator = (text:string) => ({type: ADD_NEW_TEXT, newText: text} as const)
export const addPostActionCreator = () => ({type: ADD_POST} as const)

// if (action.type === ADD_POST) {
//     let newPost: PostsDataType = {
//         id: 5,
//         message: state.newPostState,
//         likesCount: 0
//     };
//     state.postsData.push(newPost);
//     state.newPostState = "";
// } else if (action.type === ADD_NEW_TEXT) {
//     state.newPostState = action.newText;
// }
// return state;

export default profileReducer;