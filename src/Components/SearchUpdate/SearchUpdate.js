import './SearchUpdate.scss'

function SearchUpdate() {
  return (
    <div className="search_container_update">
      <h3 className="search_container-title"> TITLE YOUR VIDEO </h3>
      <input className="search_container-text-space" type="text" id="text" />
      <h3 className="search_container-videotitle"> ADD A VIDEO DESCRIPTION</h3>
      <input className="search_container-videotext" type="text" />
      <br></br>
    </div>
  )
}

export default SearchUpdate
