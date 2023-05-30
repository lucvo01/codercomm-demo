import React from "react";
import {Box, Link, Card, Stack, Avatar, Typography, CardHeader, IconButton} from '@mui/material'

function PostCard({ post }) {
  return <div>{post.content}</div>;
}

export default PostCard;
