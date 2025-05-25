import React, { useEffect, useState } from 'react';
import './index.css';
import icon from '../../assets/icon.jpg';
import SidebarButton from './sidebarbutton'; // Updated import to match the new name
import {CiMusicNote1} from "react-icons/ci";
import { FaGripfire,FaPlay } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import apiClient from '../../spotify';

function Index() {

  let [image, setImage] = useState("");

  useEffect(()=>{
    apiClient.get("me").then(response=> {})
  },[])
  
  return (
    <div className="sidebar">
      <img 
        src={icon}
        alt="Music Vibes" 
        className="sidebar-image" 
      />

      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdOutlineSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/Trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/Player" icon={<FaPlay/>}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
        <SidebarButton title="Favorites" to="/favourites" icon={<MdFavoriteBorder />} />
      </div>
      <SidebarButton title="SignOut" to="" icon={<VscSignOut/>} />
    </div>
  );
}

export default Index;
