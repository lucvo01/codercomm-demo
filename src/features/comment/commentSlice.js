import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { COMMENTS_PER_POST } from "../../app/config";
// import { createElement } from "react";

const initialState = {
  isLoading: false,
  error: null,
  commentsById: {},
  commentsByPoast: {
    'post1': ['c1']
  },
  currentPageByPost: {},
  totalCommentByPost: {}
};

const slice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createCommentSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
    },
    getCommentSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.comments = state.comments.concat(action.payload)
    }
  }
});

export default slice.reducer;

export const createComment = ({ postId, content}) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await apiService.post("/comments", {
      content,
      postId
    });
    dispatch(slice.actions.createCommentSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
}

export const getComments = ({postId, page=1, limit= COMMENTS_PER_POST}) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const params = {
      page: page,
      limit: limit
    }
    const response = await apiService.get(`/post/${postId}/comments`, {
      params
    })
    dispatch(slice.actions.getCommentSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message))
  }
}
