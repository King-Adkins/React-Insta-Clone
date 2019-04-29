import React from 'react';
import { PropTypes } from 'prop-types';
import CommentCon from './../CommentSec/CommentCon';

const Post = ({ post }) => {
    return (
        <div className = 'post-body'>
            <img src = {post.imageUrl} alt = '' />
            <CommentCon likes = {post.likes} comments = {post.comments} />
        </div>
    );
};

CommentCon.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string,
        likes: PropTypes.string
    })
};

export default Post;