import './ButtonUpload.scss'

function ButtonUpload() {
  function clickMe() {}
  return (
    <div className="Button_container-update">
      <button className="Button_container-updatevideo" onClick={clickMe}>
        PUBLISH
      </button>{' '}
      <h3> CANCEL </h3>
    </div>
  )
}
export default ButtonUpload
