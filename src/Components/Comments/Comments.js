import commentsData from '../../Assets/Data/video-details.json'
import { useState } from 'react'
import './Comments.scss'
import avatar from '../../Assets/Images/Mohan-muruge.jpg'
import { useEffect } from 'react'
import axios from 'axios'

function Comments() {
  // eslint-disable-next-line
  const [id, setId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8')
  const videoComments = commentsData.find((data) => data.id === id)

  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos/{$videos/:id}`)
      .then((response) => {
        setId(response.data)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [])
  return (
    <div className="comments__container--list">
      <div className="comments__container-div">
        <div className="Avatar_container">
          <img src={avatar} className="Avatar" alt="" />
        </div>
        <div className="comments__div">
          <div className="comments_container">
            <p className="text__join"> JOIN THE CONVERSATION </p>
            <label htmlFor="name"> </label>
          </div>
          <input className="comment__section" type="text" />
          <br />
          <div className="comment__button-container">
            <button className="comment_button">COMMENT</button>
            <hr className="comments_line"></hr>
          </div>
        </div>
      </div>

      {videoComments.comments.map((videoId, i) => (
        <div className="comment" key={i}>
          <div className="comment-header">
            <span className="comment-name">{videoId.name}</span>
            <br></br>
            <span className="comment-date">
              {new Date(videoId.timestamp).toLocaleString()}
            </span>
          </div>
          <div className="comment-text">{videoId.comment}</div>
          <hr className="comment_space"></hr>
          <div> </div>
        </div>
      ))}
    </div>
  )
}

export default Comments
