import React from 'react';

const PostItem = React.memo(function PostItem({ post, onToggleLike }) {
  return (
    <article style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>{post.title}</h3>
          <small>{post.category}</small>
        </div>
        <button onClick={() => onToggleLike(post.id)}>
          {post.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </article>
  );
});

export default PostItem;
