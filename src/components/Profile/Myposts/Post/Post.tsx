import React from "react";
import p from "./Post.module.css"
import pngAvatar from "../../../../assets/images/pngAvatar.png"

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
                <div className={p.item}>
                    <img src={pngAvatar}/>
                    {props.message}
                    <div>
                        <span>like {props.likesCount}</span>
                    </div>
                </div>

    )
}

export default Post