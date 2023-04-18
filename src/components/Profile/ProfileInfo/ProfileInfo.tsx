import React from "react";
import pi from "./ProfileInfo.module.css"
import {initialStateType, PostsDataType, ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoProps = {
    profile: ProfileType | null
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {

    if (!props.profile) {
        return <>
            <Preloader/>
        </>
    }

    return (
        <div className={pi.descriptionBlock}>
            <img src={props.profile?.photos?.large}/>
            ava + description
        </div>
    )
}

export default ProfileInfo