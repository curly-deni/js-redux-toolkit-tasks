import React from 'react';
import {useSelector} from 'react-redux';

const Comment = ({commentId}) => {
    // BEGIN (write your solution here)
    const {comment, author} = useSelector((state) => {
        const comment = state.commentsReducer.entities[commentId];
        const author = state.usersReducer.entities[comment.author];
        return {comment, author};
    }, (prev, next) => prev.comment === next.comment && prev.author === next.author);
    // END

    if (!author || !comment) {
        return null;
    }

    return (
        <>
            <h5 className="card-title">{author.name}</h5>
            <p className="card-text">{comment.text}</p>
        </>
    );
};

export default Comment;
