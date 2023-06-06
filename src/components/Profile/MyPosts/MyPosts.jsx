import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
const MyPosts = (props) => {
    return (
        <div>
            <div>
                New post
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Smurfiki' LikesCount='765' />
                ______vs______
                <Post message='Gargamel'  LikesCount='26574'/>
            </div>



        </div>

    )
}
export default MyPosts;