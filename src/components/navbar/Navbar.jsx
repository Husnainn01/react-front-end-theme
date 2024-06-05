import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/GPT-3.svg';
import { useState } from 'react';
//BEM --> Block Element Modifier

const Menu = () => {
  return (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wpgt3'>What is GPT3</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    </> 
    );  
}


const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-link_logo'>
          <img src={ logo } alt= 'logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
            <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt__navbar-menu'>
        { toogleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
        }
        {toogleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu-container-links'>
            <Menu />
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;