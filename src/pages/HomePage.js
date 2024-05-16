import React, { useContext, useState } from 'react';
import BlogPostList from '../components/BlogPostList';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';

const HomePage = () => {
  const { addPost } = useContext(BlogContext);
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddPost = () => {
    addPost(title, text, user.name);
    setTitle('');
    setText('');
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogPostList />
      <div>
        <h2>Add New Post</h2>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Text"></textarea>
        <button onClick={handleAddPost}>Add Post</button>
      </div>
    </div>
  );
};

export default HomePage;
