import React from 'react';
import './Post.css'; 

const Post = ({ title = "This is The Post Title", body = "The Post Body" }) => {
  return (
    <article className="post">
      <h2 className="post-title">{title}</h2>
      <hr className="post-divider" />
      <p className="post-body">{body}</p>
    </article>
  );
};

export default Post;