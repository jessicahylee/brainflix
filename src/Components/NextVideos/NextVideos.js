import './NextVideos.scss'
// import records from '../../Assets/Data/video-details.json' // Hard coded

function NextVideos() {
  const newRecords = records.slice(1)
  console.log('records')
 
  const handleVideoClick = (videoUrl) => {
    console.log(`Clicked video: ${videoUrl}`)
  }

  // get records from API
  useEffect(()=>{
    // axios call 
    // const records = from the api
  }, [])
  return (
    <div className="inner">
      <h3 className="nextVideos"> NEXT VIDEOS </h3>
      {newRecords.map((record, idx) => (
        <div
          onClick={() => handleVideoClick(records.video)}
          className="box"
          key={idx}
        >
          <video
            className="videos_container"
            poster={record.image}
            // width="100px"
            // height="100px"
          >
            <source src={record.video} />
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
