import ButtonUpload from '../ButtonUpload/ButtonUpload'
import SearchUpdate from '../SearchUpdate/SearchUpdate'
import UploadVideo from '../UploadVideo/UploadVideo'
import './Upload.scss'

// CALL API's here.
const Upload = () => {
  return (
    <>
      <div className="container_upload">
        <UploadVideo />
        <SearchUpdate />
      </div>
      <div className="container_button">
        <ButtonUpload />
      </div>
    </>
  )
}

export default Upload
