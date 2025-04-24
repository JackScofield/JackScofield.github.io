import { Link } from "react-router-dom";

const BlogList = () => {
  const posts = [
    { title: "Hello World", slug: "hello-world" },
    // Add more later...
  ];

  return (
    <div>
      <h2>My Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
