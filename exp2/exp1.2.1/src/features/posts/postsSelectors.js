import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();
export const selectPostState = (state) => state.posts;
export const {
  selectAll: selectPosts,
  selectById: selectPostById,
  selectEntities: selectPostEntities,
} = postsAdapter.getSelectors(selectPostState);

export const selectTotalPosts = createSelector([
  selectPosts,
], (posts) => posts.length);

export const selectPublishedPosts = createSelector([
  selectPosts,
], (posts) => posts.filter((post) => post.status === "Published").length);

export const selectDraftPosts = createSelector([
  selectPosts,
], (posts) => posts.filter((post) => post.status === "Draft").length);

export const selectTotalLikes = createSelector([
  selectPosts,
], (posts) => posts.reduce((total, post) => total + post.likes, 0));

export const selectCategoryStats = createSelector([
  selectPosts,
], (posts) =>
  posts.reduce((stats, post) => {
    const category = post.category || "Uncategorized";
    stats[category] = (stats[category] || 0) + 1;
    return stats;
  }, {}));

export const makeSelectPostsByCategory = () =>
  createSelector(
    [selectPosts, (_, category) => category],
    (posts, category) => posts.filter((post) => post.category === category)
  );

export const makeSelectPostsByStatus = () =>
  createSelector(
    [selectPosts, (_, status) => status],
    (posts, status) => posts.filter((post) => post.status === status)
  );

export const selectActivePosts = createSelector([
  selectPosts,
], (posts) => posts.filter((post) => post.status === "active"));

export const selectLikedPosts = createSelector([
  selectPosts,
], (posts) => posts.filter((post) => post.liked === true));
