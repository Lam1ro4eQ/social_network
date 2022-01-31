import React from "react";
import m from './Message.module.css'

type PropsType = {
    message: string
}

const Message = (props: PropsType) => {
    return (
        <div>
            <div className={m.message}>{props.message}</div>
        </div>
    )
}

export default Message