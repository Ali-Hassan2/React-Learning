import React, { useState } from 'react';

const Library = () => {
  const [playlists, setPlaylists] = useState([
    { name: "Chill Vibes", image: "https://picsum.photos/300/300?random=1" },
    { name: "Workout Mix", image: "https://picsum.photos/300/300?random=2" },
    { name: "Party Hits", image: "https://picsum.photos/300/300?random=3" },
    { name: "Focus Music", image: "https://picsum.photos/300/300?random=4" },
    { name: "Road Trip", image: "https://picsum.photos/300/300?random=5" },
    { name: "Indie Classics", image: "https://picsum.photos/300/300?random=6" },
    { name: "Jazz Nights", image: "https://picsum.photos/300/300?random=7" },
    { name: "Pop Legends", image: "https://picsum.photos/300/300?random=8" },
    { name: "Rock Anthems", image: "https://picsum.photos/300/300?random=9" },
    { name: "Relaxation Tunes", image: "https://picsum.photos/300/300?random=10" },
  ]);

  return (
    <div
      className="screen-container"
      style={{ padding: "20px", backgroundColor: "#111", minHeight: "100vh" }}
    >
      <h1
        style={{
          marginTop: "10px",
          textAlign: "center",
          marginBottom: "30px",
          fontFamily: "Arial, sans-serif",
          color: "#FFFFFF",
        }}
      >
        Your Playlists
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {playlists.map((playlist, index) => (
          <div
            key={index}
            style={{
              marginTop: "50px",
              width: "280px",
              height: "350px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#000",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="card"
          >
            {/* Top Half - Image */}
            <div
              style={{
                width: "100%",
                height: "50%",
                background: `url(${playlist.image}) no-repeat center center/cover`,
                transition: "transform 0.3s ease",
              }}
              className="card-image"
            ></div>

            {/* Bottom Half - Glass Effect with Content */}
            <div
              style={{
                width: "100%",
                height: "50%",
                position: "relative",
                background: "rgba(0, 0, 255, 0.1)", // Transparent blue background
                backdropFilter: "blur(10px)", // Glass effect
                WebkitBackdropFilter: "blur(10px)", // Support for Safari
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                textAlign: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Depth effect
                transition: "transform 0.3s ease, background 0.3s ease",
                backgroundColor:"#111"
              }}
              className="card-bottom"
            >
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {playlist.name}
              </h3>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  backgroundColor: "rgba(29, 185, 84, 0.8)", // Semi-transparent green
                  border: "none",
                  borderRadius: "20px",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(29, 185, 84, 1)")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(29, 185, 84, 0.8)")}
                onClick={() => alert(`${playlist.name} clicked!`)}
              >
                View Playlist
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add CSS Animations */}
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          }

          .card:hover .card-image {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Library;
