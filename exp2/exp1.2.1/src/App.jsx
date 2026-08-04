import PostForm from "./components/Postform";
import PostList from "./components/PostList";
import PostStats from "./components/PostStats";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Redux Toolkit Normalized State Demo</h1>
      <p>Experiment 1.2.1 uses centralized normalized Redux state with entity adapters.</p>
      <PostForm />
      <PostStats />
      <PostList />
    </div>
  );
}

export default App;