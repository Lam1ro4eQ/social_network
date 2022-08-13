import React from "react";

import {ProfilePageType, StoreType} from "../../../redux/store";
import {addNewTextActionCreator, addPostActionCreator, profileActionType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {
    addNewText: (textMessage: string) => void
    addPost: () => void
    profilePage: ProfilePageType
    dispatch: (action: profileActionType) => void
    store: StoreType

}


const MyPostsContainer = (props: PropsType) => {


    return (
        <StoreContext.Consumer> {
            (store) => {
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
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;