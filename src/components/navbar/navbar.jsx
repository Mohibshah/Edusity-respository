import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import Login from '../Login/Login'
const Navbar = () => {

   const [sticky, setSticky] = useState(false);
   const [theme, setTheme] = useState(localStorage.getItem('current_theme') || 'light');

   useEffect(() => {
     document.documentElement.setAttribute('data-theme', theme);
     localStorage.setItem('current_theme', theme);
   }, [theme]);

   const toggleTheme = () => {
     theme === 'light' ? setTheme('dark') : setTheme('light');
   }
   useEffect(() => {
     window.addEventListener('scroll', () => {
       window.scrollY > 50 ? setSticky(true) : setSticky(false);
     })
   }, [])

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
     setMobileMenu(!mobileMenu);
   }
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user_auth') === 'true');

  return (
    <nav className={`container ${sticky ? `dark-nav` : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : `hide-mobile-menu`} >
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About US</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        
       {/* Dark Mode Toggle Button */}
        <li onClick={toggleTheme} style={{cursor: 'pointer', fontSize: '20px', marginLeft: '20px'}}>
          {theme === 'light' ? '🌙' : '☀️'}
        </li>

      {isLoggedIn ? (
          <li onClick={() => { localStorage.removeItem('user_auth'); setIsLoggedIn(false); }} className='btn' style={{marginLeft: '20px'}}>Logout</li>
        ) : (
          <li onClick={() => setShowLogin(true)} className='btn'  style={{cursor: 'pointer', marginLeft: '20px'}}>Login</li>
        )}
      </ul>

      {showLogin && <Login setOpenLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}

      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar