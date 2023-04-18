import React from "react";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import pi from "./ProfileInfo/ProfileInfo.module.css";
import {initialStateType, PostsDataType, ProfileType} from "../../redux/profileReducer";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {ProfileApiContainerType} from "./ProfileContainer";

type StatePropsType = {
    postsData: Array<PostsDataType>
    newPostState: string
    profile: ProfileType | null
}

const Profile = (props:ProfileApiContainerType) => {
    return (
        <div className={p.content}>
            <div>
                <img className={pi.bgImg} src="https://cdn.promodj.com/afs/f74a72ad339d46cd7bb803582aec8d3912:d3f046"/>
            </div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile