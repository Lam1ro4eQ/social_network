import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import pi from "../../Profile/ProfileInfo/ProfileInfo.module.css";

const DialogItem = (props: any) => {
    return (
    <div className={s.dialogItem}>
        <div>
            <img className={s.bgImg} src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"/>
        </div>
        <NavLink className={s.navItem} to={'/dialogs/' + props.id}>{props.name}</NavLink>

    </div>
    )
}

export default DialogItem