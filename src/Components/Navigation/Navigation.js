import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import Avatar from '../Avatar/Avatar'
import './Navigation.scss'

function Navigation() {
  return (
    <div className="navigation__container">
      <Header />
      <SearchBar />
      <Button />
      <Avatar />
    </div>
  )
}
export default Navigation
