import React from 'react';
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserLocationType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";

type MapStatePropsType = {
    usersPage: InitialStateType
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users:Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
// export default compose<FC>(connect (mapStateToProps, mapDispatchToProps) (Users))