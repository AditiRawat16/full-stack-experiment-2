import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

function PostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !category) {
      alert("Please fill all the fields.");
      return;
    }

    dispatch(
      addPost({
        title,
        content,
        category,
      })
    );

    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <div className="form-container">
      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default PostForm;