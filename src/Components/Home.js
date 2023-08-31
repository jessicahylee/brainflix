import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './Hero/Hero.js'
import Information from './Information/Information.js'
import NextVideos from './NextVideos/NextVideos.js'
// Call API ID: GET /videos/:id()
// Set ID in the state ex: const [videoData, setVideoData] = useState([])
// Pass comments 
const Home = () => {
  const [videoData, setVideoData] = useState([]);
  const [videoId, setVideoId ] = useState('99478bed-6428-49ed-8eaa-f245a5414336');
  console.log("videoID:::",videoId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=5e71a000-ea04-4ea0-8635-e5e4690ef628`,
        )
        setVideoData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=5e71a000-ea04-4ea0-8635-e5e4690ef628`,
        )
        setVideoData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
    fetchData()
  }, [videoId]);



  return (
    <>
      <Hero videoData={videoData} />
      <Information videoData={videoData} />
      <NextVideos videoId={videoId} setVideoId={setVideoId} />
    </>
  )
}

export default Home
