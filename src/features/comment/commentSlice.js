import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { createElement } from "react";

const initialState = {
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: "comment",
  initialState,
  reducers: {}
});

export default slice.reducer;
