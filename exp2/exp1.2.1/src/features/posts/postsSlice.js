import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id,
});

const initialState = postsAdapter.getInitialState({
  platforms: {
    web: { id: "web", name: "Web" },
    mobile: { id: "mobile", name: "Mobile" },
  },
  platformIds: ["web", "mobile"],
  draftIds: [1],
});

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.setAll(initialState, [
    {
      id: 1,
      title: "Welcome Post",
      content: "This is the first post created using Redux Toolkit.",
      category: "General",
      status: "Draft",
      likes: 0,
      platform: "web",
    },
  ]),

  reducers: {
    addPost: (state, action) => {
      const id = Date.now();
      const newPost = {
        id,
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
        status: "Draft",
        likes: 0,
        platform: action.payload.platform || "web",
      };

      postsAdapter.addOne(state, newPost);
      state.draftIds.push(id);
      if (newPost.platform && !state.platforms[newPost.platform]) {
        state.platforms[newPost.platform] = {
          id: newPost.platform,
          name: newPost.platform,
        };
        state.platformIds.push(newPost.platform);
      }
    },

    deletePost: (state, action) => {
      const id = action.payload;
      postsAdapter.removeOne(state, id);
      state.draftIds = state.draftIds.filter((draftId) => draftId !== id);
    },

    likePost: (state, action) => {
      const id = action.payload;
      const post = state.entities[id];
      if (post) {
        post.likes += 1;
      }
    },

    publishPost: (state, action) => {
      const id = action.payload;
      const post = state.entities[id];
      if (post) {
        post.status = post.status === "Draft" ? "Published" : "Draft";
        if (post.status === "Draft" && !state.draftIds.includes(id)) {
          state.draftIds.push(id);
        }
        if (post.status === "Published") {
          state.draftIds = state.draftIds.filter((draftId) => draftId !== id);
        }
      }
    },
  },
});

export const {
  addPost,
  deletePost,
  likePost,
  publishPost,
} = postsSlice.actions;

export default postsSlice.reducer;
