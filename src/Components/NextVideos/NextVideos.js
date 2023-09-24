import './NextVideos.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Get all the videos : API  except the videoId that is playing
// On click of a Vido : setVideoId
function NextVideos({ videoId, setVideoId }) {
  const [videos, setVideos] = useState([])

  // get records from API
  useEffect(() => {
    axios
      .get(
        'https://project-2-api.herokuapp.com/videos/?api_key=5e71a000-ea04-4ea0-8635-e5e4690ef628',
      )
      .then((response) => {
        setVideos(response.data)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [])
  return (
    <div className="inner">
      <Link to="/">
        <h3 className="nextVideos"> NEXT VIDEOS </h3>
      </Link>

      {videos
        .filter((v) => v.id !== videoId)
        .map((video, idx) => (
          <div
            // onClick={() => handleVideoClick(records.video)}
            className="box"
            key={idx}
          >
            <video
              className="videos_container"
              poster={video.image}
              // width="100px"
              // height="100px"
              onClick={() => setVideoId(video.id)}
            >
              <source src={video.video} />
            </video>
            <div className="video-info">
              <h3 className="title_videos">{video.title}</h3>
              <p className="channel_videos">{video.channel}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default NextVideos
