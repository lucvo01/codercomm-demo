import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { createElement } from "react";
import { create } from "@mui/material/styles/createTransitions";

const initialState = {
  isLoading: false,
  error: null,
  posts: []
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
      state.posts.unshift(newPost);
    },
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      const { count, posts } = action.payload;
      state.posts = state.posts.concat(post);
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
  ({ userId, page, limit = 2 }) =>
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
