import React from 'react';
import './Feed.css'; // Assuming you have your CSS in a separate file

const Feed = () => {
  return (
    <div className='feed-page'>
      {/* Header Section */}
      <header className='feed-header'>
        <h1 className='feed-title'>Your Feed</h1>
      </header>

      {/* Feed Posts Section */}
      <div className='feed-posts'>
        {/* Example of a Single Post Card */}
        <div className='post-card'>
          <img className='post-image' src='your-image-link.jpg' alt='Post Image' />
          <div className='post-details'>
            <h3 className='post-title'>Post Title</h3>
            <p className='post-description'>This is a short description of the post...</p>
            <div className='post-actions'>
              <button className='like-btn'>Like</button>
              <button className='dislike-btn'>Dislike</button>
            </div>
          </div>
        </div>

        {/* Repeat similar Post Cards as needed */}
        <div className='post-card'>
          <img className='post-image' src='your-image-link.jpg' alt='Post Image' />
          <div className='post-details'>
            <h3 className='post-title'>Another Post</h3>
            <p className='post-description'>This is another post description...</p>
            <div className='post-actions'>
              <button className='like-btn'>Like</button>
              <button className='dislike-btn'>Dislike</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
