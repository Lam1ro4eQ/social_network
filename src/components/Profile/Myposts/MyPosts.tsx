import React, {ChangeEvent, KeyboardEvent} from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType,StoreType} from "../../../redux/store";
import {
    addNewTextActionCreator,
    addPostActionCreator,
    initialStateType,
    profileActionType
} from "../../../redux/profileReducer";

type PropsType = {
    addNewText: (textMessage: string) => void
    addPost: () => void
    profilePage: initialStateType
    newPostState: string
}


const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addNewTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.addNewText(text)
        // props.dispatch(addNewTextActionCreator(text))
    }

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }

    let postsMap = props.profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>) //мапим данные для отрисовки

    return (
        <div className={p.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={addNewTextArea} ref={newPostElement} value={props.profilePage.newPostState}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsMap}
            </div>
        </div>
    )
}

export default MyPosts