import React from "react";

import {AppStateType} from "../../../redux/redux-store";
import {addNewTextActionCreator, addPostActionCreator, profileActionType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";






let mapStateToProps = (state:AppStateType) => {
    return {
        profilePage: state.profilePage,
        newPostState: state.profilePage.newPostState
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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