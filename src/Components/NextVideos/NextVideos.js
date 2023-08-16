import './NextVideos.scss'
import records from '../../Assets/Data/video-details.json'

function NextVideos() {
  const newRecords = records.slice(1)
  return (
    <div className="inner">
      {newRecords.map((record, idx) => (
        <div className="box" key={idx}>
          <video className="videos_container"poster={record.image} width="200px" height="150px">
            {' '}
          </video>
          <div className="video-info">
            <h3 className="title_videos">{record.title}</h3>
            <p className="channel_videos">{record.channel}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NextVideos
