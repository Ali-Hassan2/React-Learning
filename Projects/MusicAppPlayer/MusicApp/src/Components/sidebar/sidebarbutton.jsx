import React, { useEffect } from 'react';
import './sidebarbutton.css';
import {Link, useLocation} from 'react-router-dom';

function SidebarButton(props) { 

  let location = useLocation();

  let isActive = location.pathname === props.to;

  let btnArea = isActive ? "btn-area active" :  "btn-area";



    return (
    // <div className='btn'>
    //   {/* <h3>{props.title}</h3> */}
    //   <button className='btn2'>{props.icon}</button>
    // </div>
    
    <Link to={props.to}>
        <div className={btnArea}>
            {props.icon}
            <p className='btn-title'>{props.title}</p>
        </div>
    </Link>
  );
}

export default SidebarButton;
