import React from 'react';
import './Post.css';

const PostHeader = props => {
    return (
        <div className = 'post-header'>
            <div className = 'post-thumb-wrapper'>
                <img className = 'post-thumb' src = {props.thumbnailUrl} alt = 'header' />
            </div>
            <div>
                {props.username}
            </div>
        </div>
    );
};

export default PostHeader;