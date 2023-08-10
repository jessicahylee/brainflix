import './Button.scss'

function Button() {
  function clickMe() {
    alert('Upload file')
  }
  return (
    <div className="Button_container">
      <button className="Button_header" onClick={clickMe}>
        {' '}
        UPLOAD{' '}
      </button>
    </div>
  )
}
export default Button
