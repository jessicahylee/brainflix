import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import Avatar from '../Avatar/Avatar'
import './Navigation.scss'

function Navigation() {
  return (
   
      <div className="navigation__container">
        <Header />{' '}
        <div className="avatar_">
          <SearchBar />{' '}
          <span className="avatar_mobile">
            <Avatar />
          </span>
        </div>
        <Button /> 
        <div className="avatar_tablet">
          <Avatar />
        </div>
      </div>
  )
}
export default Navigation
