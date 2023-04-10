import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType} from "../../redux/usersReducer";
import {setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
        "facebook": "facebook.com",
        "website": null,
        "vk": "vk.com/dimych",
        "twitter": "https://twitter.com/@sdf",
        "instagram": "instagra.com/sds",
        "youtube": null,
        "github": "github.com",
        "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": 2,
    "photos": {
        "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
}

class ProfileApiContainer extends React.Component<any>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <div>
                <Profile />
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType  => ({

})

export const ProfileContainer = connect(mapStateToProps,{setUserProfile})(ProfileApiContainer)