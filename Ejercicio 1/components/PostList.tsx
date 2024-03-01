import { FunctionComponent } from "preact";
import { Post } from "../types.ts";

const PostList: FunctionComponent<{ posts: Post[] }> = (
  { posts },
) => {
  return (
    <div class="Postlist">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.title}:</span>
            <span>{post.author}:</span>
            <span>{post.content}:</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;