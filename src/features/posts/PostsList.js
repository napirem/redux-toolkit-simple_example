import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import "./postsList.css";

export default function Posts() {
  const posts = useSelector(selectAllPosts);
  console.log(posts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
}
