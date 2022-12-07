import {PostsDataType, ProfilePageType, rootActionType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SETUSERS"
export type profileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewTextActionCreator>

let initialState = {
    users: [
        {
            id: 1,
            photoURL: 'https://static.wikia.nocookie.net/coolyoutubers/images/1/18/Ikakprosto-1.jpg/revision/latest/top-crop/width/360/height/360?cb=20210320205509&path-prefix=ru',
            followed: false,
            fullName: "Dmitry",
            status: 'I am looking for a job right now...',
            location: {city: 'Mins', country: 'Belarus'}
        },
        {
            id: 2,
            photoURL: 'https://static.wikia.nocookie.net/coolyoutubers/images/1/18/Ikakprosto-1.jpg/revision/latest/top-crop/width/360/height/360?cb=20210320205509&path-prefix=ru',
            followed: true,
            fullName: "Alex",
            status: 'I am boss',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 3,
            photoURL: 'https://static.wikia.nocookie.net/coolyoutubers/images/1/18/Ikakprosto-1.jpg/revision/latest/top-crop/width/360/height/360?cb=20210320205509&path-prefix=ru',
            followed: false,
            fullName: "Petr",
            status: 'I am job',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

export const usersReducer = (state: ProfilePageType = initialState, action: profileActionType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users:state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
                default:
                    return {
                        ...state, users:state.users.map(u => {
                            if (u.id === action.userId) {
                                return {...u, followed: false}
                            }
                            return u;
                        })
                    };
        case SET_USERS:
            return {...state, users: [state.users, ...action.users]}

}


}
export const followAC = (useId) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (useId) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users) => ({type: SET_USERS, users} as const)

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