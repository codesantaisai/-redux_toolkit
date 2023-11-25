import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import AddPostForm from "./AddPostForm";
import PostAuthor from "./PostAuthor";

const Posts = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit"><PostAuthor userId={post.userId}/></p>
    </article>
  ));
  return (
  <>
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  </>
  );
};

export default Posts;
