import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import './Navigation.scss'

function Navigation() {
  return (
    <div className="navigation__container">
      <Header />
      <SearchBar />
      <Button />
    </div>
  )
}
export default Navigation
