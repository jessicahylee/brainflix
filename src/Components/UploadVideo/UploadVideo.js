import heroVideo from '../../Assets/Images/Upload-video-preview.jpg'
import './UploadVideo.scss'

function UploadVideo() {
  return (
    <div className="desktop_container">
      <div className="upload__container">
        <h1 className="upload__title">Upload Video</h1>
        <h3 className="upload__title-video">VIDEO THUMBNAIL</h3>
        <img
          className="upload__image-video"
          src={heroVideo}
          alt="something here"
        />
      </div>
    </div>
  )
}

export default UploadVideo
