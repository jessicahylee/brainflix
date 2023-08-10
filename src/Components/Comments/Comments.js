import commentsData from '../../Assets/Data/video-details.json'

function Comments() {
  console.log(commentsData);
  const id = '84e96018-4022-434e-80bf-000ce4cd12b8';// save this in state Hint: useState
  const videoComments = commentsData.find((data) => data.id === id)
  console.log(videoComments.comments) // find function
  return (
    <div>
      <label for="name"> Add a new comment </label>
      <input type="text" />
      {videoComments.comments.map((videoComment, i) => (
        <div key={i}>{videoComment.comment}</div>
      ))}
    </div>
  )
}

export default Comments
