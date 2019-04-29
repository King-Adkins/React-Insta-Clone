import React from 'react';
import CommentCon from './../CommentSec/CommentCon';

const Post = ({ post }) => {
    return (
        <div className = 'post--body'>
            <img src = {post.imageUrl} alt = '' />
            <CommentCon likes = {post.likes} comments = {post.comments} />
        </div>
    );
};

export default Post;