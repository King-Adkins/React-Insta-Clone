import React from 'react';
import Comment from './Comment';

const CommentCon = props => {
    return (
        <div className = 'comment-container'>
            {props.comments.map(comment =>
                <Comment comment = {comment} key = {shortid.generate()} /> )}

        </div>
    );
};

export default CommentCon;