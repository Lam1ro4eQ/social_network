import React from "react";
import p from "./Profile.module.css"
import MyPost from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import pi from "./ProfileInfo/ProfileInfo.module.css";
import {ProfilePageType, StateType} from "../../redux/state";
import MyPosts from "./Myposts/MyPosts";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    addNewText: (textMessage: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={p.content}>
            <div>
                <img className={pi.bgImg} src="https://cdn.promodj.com/afs/f74a72ad339d46cd7bb803582aec8d3912:d3f046"/>
            </div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile