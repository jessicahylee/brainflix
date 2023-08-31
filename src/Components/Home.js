import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './Hero/Hero.js'
import Information from './Information/Information.js'
import NextVideos from './NextVideos/NextVideos.js'

const Home = () => {
  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://project-2-api.herokuapp.com/videos?api_key=5e71a000-ea04-4ea0-8635-e5e4690ef628',
        )
        setVideoData(response.data)
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Hero videoData={videoData[0]} />
      <Information videoData={videoData} />
      <NextVideos videoData={videoData.slice(0)} />
    </>
  )
}

export default Home
