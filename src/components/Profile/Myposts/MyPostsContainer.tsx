import React from "react";

import {StoreType} from "../../../redux/redux-store";
import {addNewTextActionCreator, addPostActionCreator, profileActionType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {
    store: StoreType
}


const MyPostsContainer = (props: PropsType) => {


                let addNewTextArea = (textMessage: string) => {
                    // props.addNewText(text)
                    props.store.dispatch(addNewTextActionCreator(textMessage))
                }

                let addPost = () => {
                    // props.addPost()
                    props.store.dispatch(addPostActionCreator())
                }
                return <MyPosts addNewText={addNewTextArea}
                                addPost={addPost}
                                profilePage={props.store.getState().profilePage}

                />


}

export default MyPostsContainer;