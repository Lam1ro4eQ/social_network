import React from "react";
import p from "./Profile.module.css"
import MyPost from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import pi from "./ProfileInfo/ProfileInfo.module.css";
import {StoreType} from "../../redux/redux-store";
import MyPosts from "./Myposts/MyPosts";
import {profileActionType} from "../../redux/profileReducer";
import MyPostsContainer from "./Myposts/MyPostsContainer";

type PropsType = {
    store: StoreType
}

const Profile = (props: PropsType) => {
    return (
        <div className={p.content}>
            <div>
                <img className={pi.bgImg} src="https://cdn.promodj.com/afs/f74a72ad339d46cd7bb803582aec8d3912:d3f046"/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile