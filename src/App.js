import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home'
import Upload from './Components/Upload'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
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
