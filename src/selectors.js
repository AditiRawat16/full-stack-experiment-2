import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts;
const selectAuthors = (state) => state.authors;
const selectFilters = (state) => state.filters;

export const selectCategory = createSelector(
  [selectFilters],
  (filters) => filters.category
);

export const selectLikedOnly = createSelector(
  [selectFilters],
  (filters) => filters.likedOnly
);

export const selectSearchTerm = createSelector(
  [selectFilters],
  (filters) => filters.searchTerm.trim().toLowerCase()
);

export const selectFilteredPosts = createSelector(
  [selectPosts, selectCategory, selectLikedOnly, selectSearchTerm],
  (posts, category, likedOnly, searchTerm) => {
    return posts.filter((post) => {
      const categoryMatches = category === 'all' || post.category === category;
      const likedMatches = !likedOnly || post.liked;
      const searchMatches = !searchTerm || post.title.toLowerCase().includes(searchTerm);
      return categoryMatches && likedMatches && searchMatches;
    });
  }
);

export const selectPostsByAuthor = createSelector(
  [selectFilteredPosts, selectAuthors],
  (filteredPosts, authors) => {
    return authors.map((author) => ({
      ...author,
      posts: filteredPosts.filter((post) => post.authorId === author.id)
    }));
  }
);

export const selectFilteredCount = createSelector(
  [selectFilteredPosts],
  (filteredPosts) => filteredPosts.length
);
