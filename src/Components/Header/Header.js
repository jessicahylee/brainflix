import './Header.scss'
import logo from '../../Assets/Logo/BrainFlix-logo.svg'

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default Header
