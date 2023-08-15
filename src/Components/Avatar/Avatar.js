import './Avatar.scss'
import avatar from '../../Assets/Images/Mohan-muruge.jpg'

function Avatar() {
  return (
    <div className="avatar_container">
      <img className="avatar" src={avatar} alt="" />{' '}
    </div>
  )
}

export default Avatar
