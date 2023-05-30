import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postSlice";
import { Box, Card, Typography } from "@mui/material";
import PostCard from "./PostCard";
import { LoadingButton } from "@mui/lab";

function PostList({ userId }) {
  const [page, setPage] = useState(1);
  const { currentPagePosts, postById, totalPosts, isLoading } = useSelector((state) => state.post);
  
  const posts = currentPagePosts.map((postId) => postsById[postId]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) dispatch(getPosts({ userId, page }));
  }, [userId, page, dispatch]);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {totalPosts ? (
          <LoadingButton variant="outlined" size="small" loading={isLoading} onClick={() => setPage((page) => page + 1)}>
            Load more
          </LoadingButton>
        ) : (
          <Typography variant="h6">No Post Yet</Typography>
        )}
      </Box>
    </>
  );
}

export default PostList;
