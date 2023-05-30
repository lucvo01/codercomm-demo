import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { ThumbDown, ThumbDownRounded, ThumbUpRounded } from "@mui/icons-material";
import {sendCommentReaction} from './commentSlice';
import { useDispatch } from "react-redux";

function CommentReaction({comment}) {
  const dispatch = useDispatch();

  const handleClick = (emoji) => {
    dispatch(sendCommentReaction({ commentId: comment._id, emoji}))
  }
  return (<Stack direction='row' alignItems='center'>
    <IconButton onClick={() => handleClick("like")}>
        <ThumbUpRounded sx={{fontSize: 20, color: 'primary.main'}}/>
    </IconButton>
    <Typography variant='h6' mr={1}>
        {comment?.reactions?.like}
    </Typography>

    <IconButton onClick={()=> handleClick("dislike")}>
        <ThumbDownRounded sx={{fontSize: 20, color: 'error.main'}}/>
    </IconButton>
    <Typography variant="body2">{comment?.reactions?.dislike}</Typography>
    </Stack>);
}

export default CommentReaction;
