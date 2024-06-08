import React from 'react'
import './navbar.css'
import Search from './search';
import bellIcon from '../icon/bell.png'
import chatIcon from '../icon/comment.png'
import usesrIcon from '../icon/circle-user.png'
import shopIcon from '../icon/shopping-bag.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logonavbar'></div>
        <Link to="/home" className='Home'>home</Link>
        <Link to="/creat" className='Home'>create</Link>
        <Search/>
        <Link to="/notification">
        <img src={bellIcon}  alt="Bell Icon" style={{height:'1.5rem',width:'1.5rem'}} className='bell'/>
        </Link>
        <Link to='/chat'>
        <img src={chatIcon} alt='Chat Icon' style={{height:'1.5rem',width:'1.5rem'}}  />
        </Link>
        <Link to='/shop'>
        <img src={shopIcon} alt='Shop Icon' style={{height:'1.5rem',width:'1.5rem'}}  />
        </Link>
        <Link to='/profile'>
        <img src={usesrIcon} alt='User Icon' style={{height:'1.5rem',width:'1.5rem'}} />
        </Link>
    </nav>
  );
}
