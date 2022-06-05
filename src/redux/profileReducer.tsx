import {ActionType, PostsDataType, ProfilePageType} from "./state";

const ADD_NEW_TEXT = "ADD-NEW-TEXT"
const ADD_POST = "ADD-POST"

const profileReducer = (state:ProfilePageType, action: ActionType) => {
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