import './Header.scss'
import logo from '../../Assets/Logo/BrainFlix-logo.svg'
import { Link } from 'react-router-dom'

import React from 'react'
function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
    </div>
  )
}

export default Header
