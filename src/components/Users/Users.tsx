import React, {FC} from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import {UserType} from "../../redux/usersReducer";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/pngAvatar.png"

export function Users (props: UsersPropsType)  {
    let getUsers = () => {
        if (props.usersPage.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })

            // props.setUsers(
            //     [
            //         {
            //             id: 1,
            //             photoURL: 'https://static.wikia.nocookie.net/coolyoutubers/images/1/18/Ikakprosto-1.jpg/revision/latest/top-crop/width/360/height/360?cb=20210320205509&path-prefix=ru',
            //             followed: false,
            //             fullName: "Dmitry",
            //             status: 'I am looking for a job right now...',
            //             location: {city: 'Mins', country: 'Belarus'}
            //         },
            //         {
            //             id: 2,
            //             photoURL: 'https://static.wikia.nocookie.net/coolyoutubers/images/1/18/Ikakprosto-1.jpg/revision/latest/top-crop/width/360/height/360?cb=20210320205509&path-prefix=ru',
            //             followed: true,
            //             fullName: "Alex",
            //             status: 'I am boss',
            //             location: {city: 'Moskow', country: 'Russia'}
            //         },
            //         {
            //             id: 3,
            //             photoURL: 'https://static.wikia.nocookie.net/coolyoutubers/images/1/18/Ikakprosto-1.jpg/revision/latest/top-crop/width/360/height/360?cb=20210320205509&path-prefix=ru',
            //             followed: false,
            //             fullName: "Petr",
            //             status: 'I am job',
            //             location: {city: 'Kiev', country: 'Ukraine'}
            //         }]
            // )
        }
    }

    return (

    <div>
        <button onClick={getUsers}>Get Users</button>
        {props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>

            </span>
            </div>
        )}
    </div>
    )
}

export default Users;