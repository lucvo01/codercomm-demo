import React from "react";
import {Box, Link, Card, Stack, Avatar, Typography, CardHeader, IconButton, MoreVertIcon} from '@mui/material'
import{Link as RouterLink} from 'react-router-dom'
import {fDate} from '../../utils/formatTime';
import { MoreVert } from "@mui/icons-material";


function PostCard({ post }) {
  return (<Card>
    <CardHeader
    disableTypography
    avatar={
      <Avatar src={post?.author?.avatarUrl} alt={post?.author?.name}/>
    }
    title= {<Link variant="subtitle2" color="text.primary" component={RouterLink} sx={{fontWeight: 600}} to={`/user/${post.author._id}`}>
      {post?.author?.name}

    subheader={
      <Typography variant="caption" sx={{display: "block", color: 'text.secondary'}}>
        {fDate([post.createAt])}
      </Typography>
    }

    action={
      <IconButton>
        <MoreVertIcon sx={{ fontSize: 30}}/>
      </IconButton>
    }
    </Link>}
    >
    </CardHeader>
    </Card>);
}

export default PostCard;
