import React from "react";
import {Box, Link, Card, Stack, Avatar, Typography, CardHeader, IconButton} from '@mui/material'
import{Link as RouterLink} from 'react-router-dom'

function PostCard({ post }) {
  return <Card>{post.content}</Card>;
}

export default PostCard;
