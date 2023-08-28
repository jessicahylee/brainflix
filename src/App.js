import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home'
import Upload from './Components/Upload'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <Routes>
    //   <Navigation />
    //   <Hero />

    //   <div className="destok_container">
    //     <div className="destok_container-div2">
    //       <Route path="/" element={Information} />
    //       <Route path="/article" element={Text} />
    //       {/* <Route path="/updates" component={updates}/> */}
    //     </div>
    //     <div className="destok_container-div">
    //     <Route path="/NextVideos" element={NextVideos} />
    //     </div>
    //   </div>
    // </Routes>
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} /> {/** Default page */}
        <Route path="/upload" element={<Upload />} /> {/** Upload page */}
      </Routes>
    </>
  )
}

export default App
