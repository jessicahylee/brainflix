import commentsData from '../../Assets/Data/video-details.json'
import { useState } from 'react'
import './Comments.scss'

function Comments() {
  console.log(commentsData)
  // eslint-disable-next-line
  const [id, setId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8')
  const videoComments = commentsData.find((data) => data.id === id)
  console.log(videoComments.comments) // find function
  return (
    <div className="comments_container">
      <label for="name"> </label>
      <input className="comment__section" type="text" />
      <br></br>
      <button className="comment_button">COMMENT</button>
      <hr></hr>
      {videoComments.comments.map((videoComment, i) => (
        <div key={i}>{videoComment.comment}</div>
      ))}
    </div>
  )
}

export default Comments
