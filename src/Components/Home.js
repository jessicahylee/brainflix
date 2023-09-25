import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './Hero/Hero.js'
import Information from './Information/Information.js'
import NextVideos from './NextVideos/NextVideos.js'
import Comments from './Comments/Comments.js'
// Call API ID: GET /videos/:id() 84e96018-4022-434e-80bf-000ce4cd12b8
// Set ID in the state ex: const [videoData, setVideoData] = useState([]) 99478bed-6428-49ed-8eaa-f245a5414336
// Pass comments
const Home = () => {
  const [videoData, setVideoData] = useState([])
  const [videoId, setVideoId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8')

  console.log('videoID:::', videoId)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/videos/video/${videoId}`,
      )
      setVideoData(response.data[0])
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching videos:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [videoId])

  return (
    <>
      <Hero videoData={videoData} />
      <Information videoData={videoData} />
      <Comments videoId={videoId} />
      <NextVideos videoId={videoId} setVideoId={setVideoId} />
    </>
  )
}

export default Home
