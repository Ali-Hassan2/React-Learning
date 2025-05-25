import React, { useState, useEffect, useRef } from 'react';
import './Player.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [songIndex, setSongIndex] = useState(0);
  const [audio] = useState(new Audio());
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]); // To store favorite songs
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const songs = [
    { name: "Song 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", description: "This is a great song 1", cover: "https://picsum.photos/200/200?random=1" },
    { name: "Song 2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", description: "This is a great song 2", cover: "https://picsum.photos/200/200?random=2" },
    { name: "Song 3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", description: "This is a great song 3", cover: "https://picsum.photos/200/200?random=3" },
    { name: "Song 4", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", description: "This is a great song 4", cover: "https://picsum.photos/200/200?random=4" },
    { name: "Song 5", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", description: "This is a great song 5", cover: "https://picsum.photos/200/200?random=5" },
    { name: "Song 6", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", description: "This is a great song 6", cover: "https://picsum.photos/200/200?random=6" },
    { name: "Song 7", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", description: "This is a great song 7", cover: "https://picsum.photos/200/200?random=7" },
    { name: "Song 8", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", description: "This is a great song 8", cover: "https://picsum.photos/200/200?random=8" },
    { name: "Song 9", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", description: "This is a great song 9", cover: "https://picsum.photos/200/200?random=9" },
    { name: "Song 10", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", description: "This is a great song 10", cover: "https://picsum.photos/200/200?random=10" },
    { name: "Song 11", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", description: "This is a great song 11", cover: "https://picsum.photos/200/200?random=11" },
    { name: "Song 12", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", description: "This is a great song 12", cover: "https://picsum.photos/200/200?random=12" }
  ];

  useEffect(() => {
    if (currentSong) {
      setLoading(true);  // Show loader when song is about to change
      audio.src = currentSong.url;
      audio.play();
      setIsPlaying(true);

      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
        setLoading(false);  // Hide loader when song is loaded
      };
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      const handleEnded = () => {
        nextSong();
      };

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
        audio.pause();
      };
    }
  }, [currentSong, audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setCurrentSong(songs[(songIndex + 1) % songs.length]);
  };

  const prevSong = () => {
    setSongIndex((prevIndex) => {
      const prevSongIndex = (prevIndex - 1 + songs.length) % songs.length;
      setCurrentSong(songs[prevSongIndex]);
      return prevSongIndex;
    });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toggleFavorite = (song, e) => {
    e.stopPropagation(); // Prevent song change when clicking the heart
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(song)) {
        return prevFavorites.filter((favSong) => favSong !== song);
      } else {
        return [...prevFavorites, song];
      }
    });
  };

  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="player-container">
      {/* Song List (Sidebar) */}
      <div className="sidebarr">
        <div className="sidebar-header">
          <h2>Song List</h2>
          <input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="song-list">
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              className={`song-item ${index === songIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentSong(song);
                setSongIndex(index);
              }}
            >
              <div className="song-info">
                <img src={song.cover} alt={song.name} className="song-cover" />
                <div className="song-details">
                  <div className="song-name">{song.name}</div>
                  <div className="song-description">{song.description}</div>
                </div>
              </div>
              {/* Heart Icon for Favorites */}
              <button
                className={`favorite-btn ${favorites.includes(song) ? 'favorited' : ''}`}
                onClick={(e) => toggleFavorite(song, e)}
              >
                <span role="img" aria-label="heart">
                  {favorites.includes(song) ? '❤️' : '🤍'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Player and Controls */}
      <div className="player-main">
        {/* Loader */}
        {loading && (
          <div className="loader-container">
            <div className="loader">
              <div className={`disk ${isPlaying ? 'rotating' : ''}`}>
                <img src={currentSong?.cover} alt="Album Cover" className="disk-cover" />
              </div>
              <div className="loading-text">Loading...</div>
            </div>
          </div>
        )}

        {/* Player Controls */}
        <div className="player-controls">
          <button onClick={prevSong} className="control-btn">Prev</button>
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={nextSong} className="control-btn">Next</button>
        </div>

        {/* Song Duration */}
        <div className="song-duration">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              audio.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
