import React from "react";
import p from "./Post.module.css"

const Post = (props: any) => {
    return (
                <div className={p.item}>
                    <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
                    {props.message}
                    <div>
                        <span>like {props.likesCount}</span>
                    </div>
                </div>

    )
}

export default Post