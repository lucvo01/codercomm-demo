import { ThumbDown, ThumbDownRounded, ThumbUpRounded } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

function PostReaction({post}) {

    const handleClick = (emoji) => {
        console.log(emoji);
        
    }
  return (<Stack>
    <IconButton onClick={() => handleClick("like")}>
        <ThumbUpRounded sx={{fontSize: 20, color: 'primary.main'}}/>
    </IconButton>
    <Typography variant='h6' mr={1}>
        {post?.reactions?.like}
    </Typography>

    <IconButton onClick={()=> handleClick("dislike")}>
        <ThumbDownRounded sx={{fontSize: 20, color: 'error.main'}}/>
    </IconButton>
    <Typography variant="h6">{post?.reactions?.dislike}</Typography>
    </Stack>);
}

export default PostReaction;
