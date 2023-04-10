import {PostsDataType, ProfilePageType, rootActionType} from "./store";

const ADD_NEW_TEXT = "ADD-NEW-TEXT"
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type profileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator> | ReturnType<typeof setUserProfile>

let initialState = {
    postsData: [
        {id: 1, message: "My new post", likesCount: 12},
        {id: 2, message: "Hi how are you", likesCount: 11}
    ],
    newPostState: "",
    profile:null
}

const profileReducer = (state: ProfilePageType = initialState, action: profileActionType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsDataType = {
                id: 5,
                message: state.newPostState,
                likesCount: 0
            };
            return {...state, postsData: [...state.postsData, newPost], newPostState: ""}
        }
        case ADD_NEW_TEXT: {
            return {...state, newPostState: action.newText}

        }
        case SET_USER_PROFILE: {
            return {...state, profile:action.profile}
        }
        default:
            return state;
    }


}
export const addNewTextActionCreator = (text: string) => ({type: ADD_NEW_TEXT, newText: text} as const)
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile:any) => ({type: SET_USER_PROFILE, profile} as const)


export default profileReducer;