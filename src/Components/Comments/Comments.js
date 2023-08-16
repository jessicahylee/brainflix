import commentsData from '../../Assets/Data/video-details.json'
import { useState } from 'react'
import './Comments.scss'

function Comments() {
  // eslint-disable-next-line
  const [id, setId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8')
  const videoComments = commentsData.find((data) => data.id === id)

  return (
    <div className="comments_container">
      <label htmlFor="name"> </label>
      <input className="comment__section" type="text" />
      <br />
      <button className="comment_button">COMMENT</button>
      <hr />

      {videoComments.comments.map((videoComment, i) => (
        <div className="comment" key={i}>
          <div className="comment-header">
            <span className="comment-name">{videoComment.name}</span>
            <span className="comment-date">
              {new Date(videoComment.timestamp).toLocaleString()}
            </span>
          </div>
          <div className="comment-text">{videoComment.comment}</div>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default Comments
