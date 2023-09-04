// import './Hero.scss'
// import React from 'react'

// function Hero({ videoData }) {
//   return (
//     <>
//       {videoData && (
//         <div className="hero">
//           <video className="video__container" controls poster={videoData.image}>
//             <source src={videoData.video} type="video/mp4" />
//             <source src="movie.ogg" type="video/ogg"></source>
//           </video>
//           <h1 className="video__container-title">{videoData.title}</h1>
//           <p className="video__container-description">
//             {videoData.description}
//           </p>
//         </div>
//       )}
//     </>
//   )
// }

// export default Hero

import './Hero.scss'
import React from 'react'

function Hero({ videoData }) {
  return (
    <>
      {videoData && (
        <div className="hero">
          <video
            className="video__container"
            controls
            autoPlay
            poster={videoData.image}
          >
            <source src={videoData.video} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg"></source>
          </video>
          <h1 className="video__container-title">{videoData.title}</h1>
          <p className="video__container-description">
            {videoData.description}
          </p>
        </div>
      )}
    </>
  )
}

export default Hero
