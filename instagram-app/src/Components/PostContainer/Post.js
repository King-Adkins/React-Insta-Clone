import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';

import PostHeader from './PostHeader';
import './Post.js';

const Post = props => {
    return (
        <div className = 'post-border'>
            <PostHeader username = {props.post.username} thumbnailUrl = {props.post.thumbnailUrl} />

            <div className = 'post-image-wrapper'>
                <img className = 'post-image' src = {props.post.imageUrl} alt = "thumbnail for post" />
            </div>
            <CommentSection postId = {props.post.imageUrl}
            comments = {props.post.comments} />
        </div>

    );
};




export default Post;