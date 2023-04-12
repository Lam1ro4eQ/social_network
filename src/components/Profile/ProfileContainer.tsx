import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type WithRouterType = {
    userId: string
}

type PropsType = RouteComponentProps<WithRouterType> &  ProfileApiContainerType

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile:ProfileType) => void
}

export type ProfileApiContainerType = MapDispatchPropsType & MapStatePropsType

class ProfileApiContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
});


let WithUrlDataComponent = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataComponent)