import './Button.scss'
import { Link } from 'react-router-dom'
function Button() {
  function clickMe() {
    // alert('Upload file')
  }
  return (
    <div className="Button_container">
      <Link to="/upload">
        <button className="Button_header" onClick={clickMe}>
          UPLOAD
        </button>{' '}
      </Link>
    </div>
  )
}
export default Button
