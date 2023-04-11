import React from "react";
import pi from "./ProfileInfo.module.css"
import {initialStateType, PostsDataType, ProfileType} from "../../../redux/profileReducer";

type ProfileInfoProps = {
    profile: ProfileType | null
}

const ProfileInfo : React.FC<ProfileInfoProps> = (props) => {

    if (!props.profile){
        return  <div>Profile notFound</div>
    }

    return (
        <div className={pi.descriptionBlock}>
            <img src={props.profile?.photos?.large}/>
            ava + description
        </div>
    )
}

export default ProfileInfo