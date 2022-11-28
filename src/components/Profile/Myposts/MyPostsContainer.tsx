import React from "react";

import {StoreType} from "../../../redux/redux-store";
import {addNewTextActionCreator, addPostActionCreator, profileActionType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";

type PropsType = {
    store: StoreType
}


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let addNewTextArea = (textMessage: string) => {
//                         // props.addNewText(text)
//                         store.dispatch(addNewTextActionCreator(textMessage))
//                     }
//
//                     let addPost = () => {
//                         // props.addPost()
//                         store.dispatch(addPostActionCreator())
//                     }
//
//                     return <MyPosts addNewText={addNewTextArea}
//                                     addPost={addPost}
//                                     profilePage={store.getState().profilePage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewText: (textMessage: string) => {
            dispatch(addNewTextActionCreator(textMessage))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;