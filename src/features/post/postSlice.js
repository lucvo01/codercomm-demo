import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { createElement } from "react";
import { create } from "@mui/material/styles/createTransitions";

const initialState = {
  isLoading: false,
  error: null,
  postsById: {

  },
  currentPagePosts: []
};

const slice = createSlice({
  name: "post",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createPostSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      const newPost = action.payload;
      if(state.currentPagePosts.length % POST_PER_PAGE === 0)
        state.currentPagePosts.pop();
      state.postsById[newPost._id] = newPost;
      state.posts.unshift(newPost._id);
    },
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      const { count, posts } = action.payload;
      posts.forEach(post => {
        state.postById[post._id] =post;
        if(!state.currentPagePosts.push(post._id))
        state.currentPagePosts.push(post._id);
      })
      state.totalPosts = count;
    }
  }
});
export default slice.reducer;

export const createPost =
  ({ content, image }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.post("/posts", {
        content,
        image
      });
      dispatch(slice.actions.createPostSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
    }
  };

export const getPosts =
  ({ userId, page, limit = POST_PER_PAGE }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const params = { limit, page };
      const response = await apiService.get(`/posts/user/${userId}`, {
        params
      });
      dispatch(slice.actions.getPostSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
    }
  };
