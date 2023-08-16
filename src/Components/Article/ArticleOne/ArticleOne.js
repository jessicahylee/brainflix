import './ArticleOne.scss'
import views from '../../../Assets/Icons/views.svg'
import likes from '../../../Assets/Icons/likes.svg'


function ArticleOne() {
  return (
    <div className="article__container">
      <p className="article__containerOne--views">
        1,001,023 <img className="icon_views" src={views} alt="" />
      </p>{' '}
      <div>
        {' '}
        <p className="article__container--likes">
          {' '}
          110,985 <img className="icon_views" src={likes} alt="" />
        </p>{' '}
      </div>
    </div>
  )
}
export default ArticleOne
