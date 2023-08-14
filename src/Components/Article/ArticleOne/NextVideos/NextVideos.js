import records from '../../../../Assets/Data/video-details.json'

function NextVideos() {
const newRecords = records.slice(1);
  return (
    <div className="inner">
      {newRecords &&
        newRecords.map((record,idx) => {
          return (
          
            <div className="box">
              <video key={idx} poster={record.image} width="200px" height="150px">
                {' '}
              </video>
            </div> 
          )
})}
   </div>
  )
}

export default NextVideos
