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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:8080`)
        setVideoData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:8080`)
        setVideoData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
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
