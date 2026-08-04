import React from 'react';

const FilterPanel = React.memo(function FilterPanel({
  category,
  likedOnly,
  searchTerm,
  categoryOptions,
  onCategoryChange,
  onLikedOnlyChange,
  onSearchTermChange
}) {
  return (
    <section style={{ marginBottom: 24, padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Filter Options</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <label>
          Category
          <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={likedOnly}
            onChange={(event) => onLikedOnlyChange(event.target.checked)}
          />
          Liked only
        </label>
        <label style={{ flex: '1 1 240px' }}>
          Search
          <input
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            style={{ width: '100%' }}
          />
        </label>
      </div>
    </section>
  );
});

export default FilterPanel;
