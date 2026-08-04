import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredPosts,
  selectPostsByAuthor,
  selectFilteredCount,
  selectCategory,
  selectLikedOnly,
  selectSearchTerm
} from './selectors.js';
import { setCategory, setLikedOnly, setSearchTerm, toggleLike } from './store.js';
import FilterPanel from './components/FilterPanel.jsx';
import PostList from './components/PostList.jsx';
import SummaryCard from './components/SummaryCard.jsx';

const categoryOptions = ['all', 'redux', 'performance', 'react'];

function App() {
  const dispatch = useDispatch();
  const filteredPosts = useSelector(selectFilteredPosts);
  const postsByAuthor = useSelector(selectPostsByAuthor);
  const filteredCount = useSelector(selectFilteredCount);
  const category = useSelector(selectCategory);
  const likedOnly = useSelector(selectLikedOnly);
  const searchTerm = useSelector(selectSearchTerm);

  const memoizedAuthors = useMemo(() => postsByAuthor, [postsByAuthor]);

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Redux Memoized Selectors Demo</h1>
      <SummaryCard count={filteredCount} />
      <FilterPanel
        category={category}
        likedOnly={likedOnly}
        searchTerm={searchTerm}
        categoryOptions={categoryOptions}
        onCategoryChange={(value) => dispatch(setCategory(value))}
        onLikedOnlyChange={(value) => dispatch(setLikedOnly(value))}
        onSearchTermChange={(value) => dispatch(setSearchTerm(value))}
      />
      <PostList
        posts={filteredPosts}
        postsByAuthor={memoizedAuthors}
        onToggleLike={(id) => dispatch(toggleLike(id))}
      />
    </div>
  );
}

export default App;
