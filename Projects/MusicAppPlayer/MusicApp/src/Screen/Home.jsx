import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from './Library';
import Feed from './Feed';
import Favourites from './Favourites';
import Player from './Player';
import Trending from './Trending';
import './Home.css';
import SideBar from '../Components/sidebar';
import Login from './Authentication/login';
import { setClientToken } from '../spotify';

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hashvalue = window.location.hash;
    window.location.hash = ""; // Clear the hash
    if (!token && hashvalue) {
      const _token = hashvalue.split("&")[0].split("=")[1]; // Extract the token
      setToken(_token);
      setClientToken(_token);
      window.localStorage.setItem("token", _token); // Store the token
    } else {
      const storedToken = window.localStorage.getItem("token"); // Retrieve the stored token
      setToken(storedToken);
      setClientToken(storedToken);
    }
    console.log(hashvalue);
  }, [token]);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className='main-body'>
        <SideBar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
