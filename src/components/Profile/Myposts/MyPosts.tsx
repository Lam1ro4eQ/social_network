import React, {ChangeEvent, KeyboardEvent} from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, AddNewTextType, AddPostTextType, ProfilePageType, StoreType} from "../../../redux/state";

type PropsType = {
    //addNewText: (textMessage: string) => void
    //addPost: () => void
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    store: StoreType
}

const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addNewTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value;
           // props.addNewText(text);
        props.dispatch({type: 'ADD-NEW-TEXT', newText: text})
    }

    let addPost = () => {
        //props.addPost();
        props.dispatch({type: 'ADD-POST'})
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsMap}
            </div>
        </div>
    )
}

export default MyPosts