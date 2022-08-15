import React from "react";

import {StoreType} from "../../../redux/redux-store";
import {addNewTextActionCreator, addPostActionCreator, profileActionType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {
    store: StoreType
}


const MyPostsContainer = (props: PropsType) => {
    return (
        <StoreContext.Consumer> {
            (store) => {

                let addNewTextArea = (textMessage: string) => {
                    // props.addNewText(text)
                    store.dispatch(addNewTextActionCreator(textMessage))
                }

                let addPost = () => {
                    // props.addPost()
                    store.dispatch(addPostActionCreator())
                }

                return <MyPosts addNewText={addNewTextArea}
                                addPost={addPost}
                                profilePage={store.getState().profilePage}/>
            }
        }
        </StoreContext.Consumer>
    )


}

export default MyPostsContainer;