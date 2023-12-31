import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("posts");
  return data;
});

const initialState = {
  post: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.items = [];
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.items = [];
        state.status = "error";
      });
  },
});


export const postsReducer = postsSlice.reducer;
