import React from 'react';
import PostItem from './PostItem.jsx';

const PostList = React.memo(function PostList({ posts, postsByAuthor, onToggleLike }) {
  return (
    <section style={{ display: 'grid', gap: 24 }}>
      <div style={{ display: 'grid', gap: 12 }}>
        <h2>Posts</h2>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onToggleLike={onToggleLike} />
        ))}
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        <h2>Posts grouped by author</h2>
        {postsByAuthor.map((author) => (
          <div key={author.id} style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
            <strong>{author.name}</strong>
            <div style={{ marginTop: 6 }}>
              {author.posts.length > 0 ? (
                author.posts.map((post) => <div key={post.id}>• {post.title}</div>)
              ) : (
                <div style={{ color: '#666' }}>No matching posts</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default PostList;
