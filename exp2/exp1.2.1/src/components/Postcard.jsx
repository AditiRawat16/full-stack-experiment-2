import { memo } from "react";
import { useDispatch } from "react-redux";
import { deletePost, publishPost, likePost } from "../features/posts/postsSlice";

function PostCard({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="post-card">
      <h3>{post.title}</h3>

      <p>
        <strong>Category:</strong> {post.category}
      </p>

      <p>{post.content}</p>

      <p>
        <strong>Status:</strong> {post.status}
      </p>

      <p>
        <strong>Likes:</strong> {post.likes}
      </p>

      <div className="button-group">
        <button onClick={() => dispatch(likePost(post.id))}>👍 Like</button>

        <button onClick={() => dispatch(publishPost(post.id))}>
          {post.status === "Draft" ? "Publish" : "Move to Draft"}
        </button>

        <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
      </div>
    </div>
  );
}

export default memo(PostCard);
