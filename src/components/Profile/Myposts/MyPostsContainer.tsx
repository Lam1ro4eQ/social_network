import React from "react";

import {
    ProfilePageType,
    StoreType
} from "../../../redux/store";
import {
    addNewTextActionCreator,
    addPostActionCreator, profileActionType,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type PropsType = {
    addNewText: (textMessage: string) => void
    addPost: () => void
    profilePage: ProfilePageType
    dispatch: (action: profileActionType) => void
    store: StoreType

}


const MyPostsContainer = (props: PropsType) => {

    let addNewTextArea = (textMessage:string) => {
        // props.addNewText(text)
        props.dispatch(addNewTextActionCreator(textMessage))
    }

    let addPost = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }

    return (<MyPosts addNewText={addNewTextArea}
                     addPost={addPost}
    />)
}

export default MyPostsContainer;