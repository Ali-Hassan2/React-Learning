import React from 'react';
import './Trending.css';

// Function to generate random ratings
const getRandomRating = () => (Math.random() * (5 - 1) + 1).toFixed(1);

const Trending = () => {
  const trendingItems = Array.from({ length: 50 }, (_, index) => ({
    songName: `Song ${index + 1}`,
    coverImage: `https://picsum.photos/200/200?random=${index + 1}`,
    rating: getRandomRating(),
  }));

  return (
    <div className="trending-page">
      <h1 className="trending-title">Trending Now</h1>
      <div className="trending-list">
        {trendingItems.map((item, index) => (
          <div key={index} className="trending-item">
            <img src={item.coverImage} alt={item.songName} className="cover-image" />
            <h3 className="song-name">{item.songName}</h3>
            <div className="rating">Rating: {item.rating} / 5</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
