import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "My First Post",
      content: "Learning Redux Toolkit",
      liked: false,
      status: "active"
    },
    {
      id: 2,
      title: "React Project",
      content: "Building a social media app",
      liked: false,
      status: "active"
    }
  ]
};
const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },
    toggleStatus: (state, action) => {
      const post = state.posts.find(
        (post) => post.id === action.payload
      );

      if (post) {
        post.status =
          post.status === "active"
            ? "inactive"
            : "active";
      }
    },
    likePost: (state, action) => {
      const post = state.posts.find(
        (post) => post.id === action.payload
      );

      if (post) {
        post.liked = !post.liked;
      }
    }

  }
});
export const {
  deletePost,
  toggleStatus,
  likePost
} = postsSlice.actions;
export default postsSlice.reducer;