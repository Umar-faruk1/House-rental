import './navbar.css'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import React from 'react'

const Navbar = () => {
    const [isNavShowing, setisNavShowing] = useState(false)
  
  return (
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='logo' onClick={() => setisNavShowing(false)}>
          <img src={Logo} alt='navLogo'/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {
          links.map(({name, path}, index) => {
            return (
              <li key={index}>
              <NavLink to={path}>{name}</NavLink>
                
              </li>
            )
          })
        }
        </ul>
        <button className='nav_toggle-btn' onClick={() => setisNavShowing(prev => !prev)}>
          {
            isNavShowing ? <IoIosCloseCircleOutline/> : <FaBars />
          }
        </button>
      </div>

    </nav>
  )
}

export default Navbar
