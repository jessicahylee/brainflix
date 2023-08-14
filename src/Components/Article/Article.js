import './Article.scss'

function Article() {
  return (
    <div className="article__container">
      <p className="article__text"> By Red Crow </p>{' '}
      <div>
        {' '}
        <p className="article__container--date"> 07/11/2021 </p>{' '}
      </div>
    </div>
  )
}
export default Article
