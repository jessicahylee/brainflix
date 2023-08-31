import './ButtonUpload.scss'
import Swal from 'sweetalert2'

function ButtonUpload() {
  const clickMe = () => {
    Swal.fire('Success! Video Uploaded!')
  }

  return (
    <div className="Button_container-update">
      <h3 className="Button_container-cancelvideo1"> CANCEL </h3>
      <button className="Button_container-updatevideo" onClick={clickMe}>
        PUBLISH
      </button>{' '}
      <h3 className="Button_container-cancelvideo"> CANCEL </h3>
    </div>
  )
}
export default ButtonUpload
