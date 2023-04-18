import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from 'react-router-dom';


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileApiContainerType = MapDispatchPropsType & MapStatePropsType


const ProfileApiContainer = (props: ProfileApiContainerType) => {
    let userId = useParams();
    useEffect(()=>{

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            props.setUserProfile(response.data)
        });
    },[])



    return (
        <div>
            <Profile {...props}/>
        </div>
    )

<<<<<<< HEAD
=======
    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
>>>>>>> parent of 1a670bf (user description, profileContainer)
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
});


// let WithUrlDataComponent = WithRouter(ProfileApiContainer)


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiContainer)