import React from "react";
import p from "./Profile.module.css"
import MyPost from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import pi from "./ProfileInfo/ProfileInfo.module.css";



const Profile = (props: any) => {
    return (
        <div className={p.content}>
            <div>
                <img className={pi.bgImg} src="https://cdn.promodj.com/afs/f74a72ad339d46cd7bb803582aec8d3912:d3f046"/>
            </div>
            <ProfileInfo/>
            <MyPost postsData={props.state.profilePage.postsData}
                    newPostState={props.state.profilePage.newPostState}
                    addPost={props.addPost}
                    addNewText={props.addNewText}/>
        </div>
    )
}

export default Profile