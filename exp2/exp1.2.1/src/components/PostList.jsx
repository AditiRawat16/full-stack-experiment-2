import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, likePost, publishPost } from "../features/posts/postsSlice";
import { selectPosts } from "../features/posts/postsSelectors";

function PostList() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();


  return (
    <div>

      <h2>Posts</h2>

      {
        posts.map((post) => (

          <div key={post.id}>

            <h3>
              {post.title}
            </h3>

            <p>
              Likes: {post.likes}
            </p>


            <button
              onClick={() => dispatch(likePost(post.id))}
            >
              Like
            </button>


            <button
              onClick={() => dispatch(publishPost(post.id))}
            >
              {post.status === "Draft" ? "Publish" : "Move to Draft"}
            </button>


            <button
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default PostList;