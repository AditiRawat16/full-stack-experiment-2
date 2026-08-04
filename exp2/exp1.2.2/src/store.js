import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialPosts = [
  { id: 1, title: 'Redux Basics', category: 'redux', liked: true, authorId: 1 },
  { id: 2, title: 'Memoized Selectors', category: 'performance', liked: false, authorId: 2 },
  { id: 3, title: 'Derived State', category: 'redux', liked: true, authorId: 1 },
  { id: 4, title: 'React Rendering', category: 'react', liked: false, authorId: 3 },
  { id: 5, title: 'Large Scale Apps', category: 'performance', liked: true, authorId: 2 }
];

const initialAuthors = [
  { id: 1, name: 'Ayesha' },
  { id: 2, name: 'Basil' },
  { id: 3, name: 'Clara' }
];

const initialFilters = {
  category: 'all',
  likedOnly: false,
  searchTerm: ''
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPosts,
  reducers: {
    toggleLike(state, action) {
      const post = state.find((post) => post.id === action.payload);
      if (post) post.liked = !post.liked;
    }
  }
});

const authorsSlice = createSlice({
  name: 'authors',
  initialState: initialAuthors,
  reducers: {}
});

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setLikedOnly(state, action) {
      state.likedOnly = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    }
  }
});

export const { toggleLike } = postsSlice.actions;
export const { setCategory, setLikedOnly, setSearchTerm } = filtersSlice.actions;

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    authors: authorsSlice.reducer,
    filters: filtersSlice.reducer
  }
});
