import './SearchBar.scss'

function SearchBar() {
  
  return (
  
      <div className="search_container">
        <label  className ="search" for="search"> </label>
        <input className="search" type="search" id="search"/>
      </div>

  )
}

export default SearchBar;