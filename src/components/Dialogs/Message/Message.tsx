import React from "react";
import m from './Message.module.css'
import pi from "../../Profile/ProfileInfo/ProfileInfo.module.css";


const Message = (props: any) => {
    return (
        <div>
            <div className={m.message}>{props.message}</div>
        </div>
    )
}

export default Message