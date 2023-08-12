function Hero() {
  return (
    <div className="video__container">
      <video
        src="https://project-2-api.herokuapp.com/stream?api_key=ab363e82-b5e2-427b-b9dd-4741e73dd411"
        width="500"
      >
        {' '}
      </video>
      <h1> BMX Rampage: 2021 Highlights</h1>
      <hr></hr>
    </div>
  )
}

export default Hero
