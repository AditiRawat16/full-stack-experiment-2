import { useSelector } from "react-redux";
import {
  selectTotalPosts,
  selectPublishedPosts,
  selectDraftPosts,
  selectTotalLikes,
} from "../features/posts/postsSelectors.js";

function PostStats() {
  const totalPosts = useSelector(selectTotalPosts);
  const publishedPosts = useSelector(selectPublishedPosts);
  const draftPosts = useSelector(selectDraftPosts);
  const totalLikes = useSelector(selectTotalLikes);

  return (
    <div className="stats">
      <h2>Post Statistics</h2>

      <p>
        Total Posts: {totalPosts}
      </p>

      <p>
        Published Posts: {publishedPosts}
      </p>

      <p>
        Draft Posts: {draftPosts}
      </p>

      <p>
        Total Likes: {totalLikes}
      </p>
    </div>
  );
}

export default PostStats;