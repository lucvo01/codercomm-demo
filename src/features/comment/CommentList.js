import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getComments } from "./commentSlice";
import { COMMENTS_PER_POST } from "../../app/config";
import { Pagination, Stack, Typography } from "@mui/material";

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
            currentPage: state.comment.currentPage[postId] || 1,
            commentsById: state.comment.commentsById,
            isLoading: state.comment.isLoading,
            
        }),
        shallowEqual
    );

    const totalPages = Math.ceil(totalComments / COMMENTS_PER_POST);

useEffect(() => {
    if (postId) dispatch(getComments({postId}));
}, [postId, dispatch])

  return (<Stack spacing={1.5}>
    <Stack direction='row' justifyContent='space-between'>
        <Typography variant="subtitle" sx={{color: 'text.secondary'}}>
            {totalComments > 1 
            ? `${totalComments} comments`
            : totalComments === 1
            ? `${totalComments} comment`
            : "No comment"
        }
        </Typography>
        {totalComments > COMMENTS_PER_POST && (
            <Pagination  
            count={totalPages}
            page={currentPage}
            onChange={ (e, page) => dispatch(getComments({postId, page}))}
            />
        )}
    </Stack>
    </Stack>);
}

export default CommentList;
