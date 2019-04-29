import React from 'react';
import Post from './Post';
import UserInfo from './UserInfo';
import PropTypes from './PropTypes';
import './Post.sass';


const PostContainer = ({ post }) => {
    const { username, thumbnailUrl } = post;
    return (
        <div className = 'post-container'>
            <UserInfo username = {username}  thumbnailUrl = {thumbnailUrl} />
            <Post post = {post} />
        </div>
    );
};

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.imageUrl,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    })
};

export default PostContainer;