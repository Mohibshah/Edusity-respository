import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Login from '../Login/Login';

const Navbar = ({ theme, setTheme }) => { // Theme props yahan se aa rahe hain
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user_auth') === 'true');
    
    const location = useLocation();

    // Scroll hone par navbar ka color badalne ke liye
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const handleLogout = () => {
        localStorage.removeItem('user_auth');
        setIsLoggedIn(false);
    };

    return (
        <nav className={`container ${sticky || location.pathname !== '/' ? 'dark-nav' : ''}`}>
            <RouterLink to='/'>
                <img src={logo} alt="" className='logo' />
            </RouterLink>
            
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                {location.pathname === '/' ? (
                    <>
                        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
                        <li><ScrollLink to='programs' smooth={true} offset={-260} duration={500}>Program</ScrollLink></li>
                        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About US</ScrollLink></li>
                        <li><ScrollLink to='campus' smooth={true} offset={-260} duration={500}>Campus</ScrollLink></li>
                        <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
                        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</ScrollLink></li>
                    </>
                ) : (
                    <>
                        <li><RouterLink to='/'>Home</RouterLink></li>
                        <li><RouterLink to='/'>Program</RouterLink></li>
                        <li><RouterLink to='/'>About US</RouterLink></li>
                        <li><RouterLink to='/'>Campus</RouterLink></li>
                        <li><RouterLink to='/'>Testimonials</RouterLink></li>
                        <li><RouterLink to='/' className='btn'>Contact Us</RouterLink></li>
                    </>
                )}

                {/* Dark Mode Toggle */}
                <li onClick={toggleTheme} style={{cursor: 'pointer', fontSize: '20px', marginLeft: '20px'}}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </li>

                {/* Login / Logout Logic */}
                {isLoggedIn ? (
                    <li onClick={handleLogout} className='btn' style={{marginLeft: '20px'}}>Logout</li>
                ) : (
                    <li onClick={() => setShowLogin(true)} className='btn' style={{marginLeft: '20px'}}>Login</li>
                )}
            </ul>
            
            {showLogin && <Login setOpenLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}

            {/* Mobile View Toggle Icon */}
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar;