import React from 'react';
import Post from './Post';

const PostList = () => {
  // Skapar några exempel-posts
  const posts = [
    {
      id: 1,
      title: "This is The Post Title",
      body: "The Post Body"
    },
    {
      id: 2,
      title: "This is The Post Title",
      body: "The Post Body"
    },
    {
      id: 3,
      title: "This is The Post Title",
      body: "The Post Body"
    }
  ];

  return (
    <div
      className="post-list"
      style={{
        border: '3px solid #2a9d8f',
        borderRadius: '8px',
        padding: '2.5rem 2.5rem 2.5rem 2.5rem',
        background: 'white',
        minWidth: '520px',
        maxWidth: '700px',
        width: '100%',
        marginRight: '2.5rem',
        boxSizing: 'border-box'
      }}
    >
      {posts.map(post => (
        <Post 
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default PostList;