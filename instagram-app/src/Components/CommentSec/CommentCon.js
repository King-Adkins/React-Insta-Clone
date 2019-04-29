import React from 'react';
import Comment from './Comment';

const CommentCon = props => {
    return (
        <div>
            {props.comments.map(comment =>
                <Comment comment = {comment} /> )}

        </div>
    );
};

export default CommentCon;