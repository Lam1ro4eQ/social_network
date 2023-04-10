const ADD_NEW_TEXT = "ADD-NEW-TEXT"
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type profileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator> | ReturnType<typeof setUserProfile>

export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type PhotosType = {
    small: string
    large: string
}

type ContactType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

type initialStateType = {
    postsData: Array<PostsDataType>
    newPostState: string
    profile: ProfileType | null
}

let initialState = {
    postsData: [
        {id: 1, message: "My new post", likesCount: 12},
        {id: 2, message: "Hi how are you", likesCount: 11}
    ],
    newPostState: "",
    profile: null
}

const profileReducer = (state: initialStateType = initialState, action: profileActionType) => {

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
export const setUserProfile = (profile:ProfileType) => ({type: SET_USER_PROFILE, profile} as const)


export default profileReducer;