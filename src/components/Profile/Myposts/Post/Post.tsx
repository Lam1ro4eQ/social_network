import React from "react";
import p from "./Post.module.css"

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
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