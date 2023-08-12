import records from '../../../../Assets/Data/video-details.json'

function NextVideos() {
  console.log(records)
  return (
    <div className="inner">
      {records &&
        records.map((record) => {
          return (
            <div className="box">
              <video poster={record.image} width="200px" height="150px">
                {' '}
              </video>
            </div>
          )
        })}
    </div>
  )
}

export default NextVideos
