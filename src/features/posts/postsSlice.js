import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, title: "Learning redux toolkit", content: "I've heard good think." },
  { id: 1, title: "Slice...", content: "The more I say slice, the more I want pizza" },
];

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.unshift(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.post;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
