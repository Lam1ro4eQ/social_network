import {PostsDataType, ProfilePageType, rootActionType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
export type profileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator>

let initialState = {
    users: [
        {id: 1, followed: false, fullName: "Dmitry", status: 'I am looking for a job right now...', location:{city: 'Mins', country: 'Belarus'}},
        {id: 2, followed: true, fullName: "Alex", status: 'I am boss', location:{city: 'Moskow', country: 'Russia'}},
        {id: 3, followed: false, fullName: "Petr", status: 'I am job', location:{city: 'Kiev', country: 'Ukraine'}},
    ]
}

const usersReducer = (state: ProfilePageType = initialState, action: profileActionType) => {

    switch (action.type) {
        case FOLLOW:

        case UNFOLLOW:
        default:
            return state;
    }


}
export const followACr = (useId) => ({type: FOLLOW, useId} as const)
export const unfollowAC = (useId) => ({type: UNFOLLOW, useId} as const)

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

export default usersReducer;