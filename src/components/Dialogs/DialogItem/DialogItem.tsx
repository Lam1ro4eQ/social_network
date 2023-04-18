import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import pngAvatar from "../../../assets/images/pngAvatar.png"

type PropsType = {
    name: string
    id: number
}

const DialogItem = (props: PropsType) => {
    return (
    <div className={s.dialogItem}>
        <div>
            <img className={s.bgImg} src={pngAvatar}/>
        </div>
        <NavLink className={s.navItem} to={'/dialogs/' + props.id}>{props.name}</NavLink>

    </div>
    )
}

export default DialogItem