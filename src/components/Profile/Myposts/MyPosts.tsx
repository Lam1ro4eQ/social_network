import React, {ChangeEvent, KeyboardEvent} from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type PropsType = {
    addNewText: (textMessage: string) => void
    addPost: () => void
    profilePage: ProfilePageType
    //newPostState: string
}

const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let text = e.currentTarget.value;
            props.addNewText(text);
        }

    }

    let addPost = () => {
        props.addPost();
    }

    let postsMap = props.profilePage.postsData.map((post: any) => <Post message={post.message} likesCount={post.likesCount}/>) //мапим данные для отрисовки

    return (
        <div className={p.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={addNewText} ref={newPostElement} value={props.profilePage.newPostState}/>
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