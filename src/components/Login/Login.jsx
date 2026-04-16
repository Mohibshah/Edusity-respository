import React from 'react'
import './Login.css'

// 1. Props mein setIsLoggedIn add kiya
const Login = ({ setOpenLogin, setIsLoggedIn }) => {

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Login logic
    localStorage.setItem('user_auth', 'true'); // Browser ko yaad rahega
    setIsLoggedIn(true); // Navbar foran Logout button dikhayega
    setOpenLogin(false); // Popup band ho jayega
    alert("Login Successful!");
  }

  return (
    <div className='login-popup'>
      {/* 2. Form par onSubmit lagaya */}
      <form className="login-container" onSubmit={handleLogin}>
        <div className="login-title">
          <h2>Login</h2>
          <span onClick={() => setOpenLogin(false)}>×</span>
        </div>
        <div className="login-inputs">
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type='submit'>Login</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>I agree to the terms & conditions</p>
        </div>
      </form>
    </div>
  )
}

export default Login