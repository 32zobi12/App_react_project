import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img} src='https://oir.mobi/uploads/posts/2022-08/1661384701_4-oir-mobi-p-fon-trenazhernii-zal-oboi-4.jpg' />
            </div>
            <div>
                Ava + descripition
            </div>
            <div>
                <MyPosts />
                


            

            </div>

        </div>
    )
}
export default Profile;