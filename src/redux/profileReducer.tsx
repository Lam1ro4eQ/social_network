import { PostsDataType, ProfilePageType} from "./state";

const ADD_NEW_TEXT = "ADD-NEW-TEXT"
const ADD_POST = "ADD-POST"
export type profileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator>

const profileReducer = (state:ProfilePageType, action: profileActionType) => {
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