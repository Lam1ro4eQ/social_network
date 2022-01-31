import React, {ChangeEvent, KeyboardEvent} from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props: any) => {

    let newPostElement = React.createRef();

    let addNewText = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.addNewText(text);
    }

    let addPost = () => {
        props.addPost();
    }

    let postsMap = props.postsData.map((post: any) => <Post message={post.message} likesCount={post.likesCount}/>) //мапим данные для отрисовки




    return (
        <div className={p.postsBlock}>
            My posts
            <div>
                <div>
                    {/*<textarea onChange={addNewText} ref={newPostElement} value={props.newPostState}/>*/}
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