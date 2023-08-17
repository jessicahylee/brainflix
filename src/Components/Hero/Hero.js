import './Hero.scss'

function Hero() {
  return (
    <div className="video__container">
      <video
        className="video_video"
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        width="500vx"
        controls
      >
        {' '}
      </video>
      <h1 className="video__container-title"> BMX Rampage: 2021 Highlights</h1>
    </div>
  )
}

export default Hero
