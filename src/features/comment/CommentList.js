import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getComments } from "./commentSlice";

function CommentList({postId}) {
    const dispatch = useDispatch();
    
    const {
        commentsByPost,
        commentsById,
        totalComments,
        isLoading,
        currentPage
    } = useSelector(
        (state) => ({
            commentsByPost: state.comment.commentsByPost[postId],
            totalComments: state.comment.totalComments[postId],
            currentPage: state.comment.currentPage[postId],
            commentsById: state.comment.commentsById,
            isLoading: state.comment.isLoading,
            
        }),
        shallowEqual
    );

useEffect(() => {
    if (postId) dispatch(getComments({postId}));
}, [postId, dispatch])

  return (<div>
    <h6>CommentList</h6>
    </div>);
}

export default CommentList;
