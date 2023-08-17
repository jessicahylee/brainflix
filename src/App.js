import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Text from './Components/Article/Text/Text'
import Comments from './Components/Comments/Comments'
import NextVideos from './Components/NextVideos/NextVideos'
import Information from './Components/Information/Information'
import './App.scss'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="destok_container">
        <div className="destok_container-div2">
          <Information />
          <Text />
          <Comments />
        </div>
        <div className="destok_container-div">
          <NextVideos />
        </div>
      </div>
    </>
  )
}

export default App
