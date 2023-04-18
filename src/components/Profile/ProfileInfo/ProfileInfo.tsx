import React from "react";
import pi from "./ProfileInfo.module.css"
<<<<<<< HEAD
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
=======

>>>>>>> parent of 1a670bf (user description, profileContainer)

const ProfileInfo = () => {
    return (
        <div className={pi.descriptionBlock}>
            ava + description
        </div>
    )
}

export default ProfileInfo