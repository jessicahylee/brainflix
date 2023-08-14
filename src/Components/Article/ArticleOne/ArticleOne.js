import './ArticleOne.scss'

// function ArticleOne() {
//   return (
//     <div id="article" className="article__containerOne">
//       {/* <p className="article__containerOne--views">1,001,023</p>

//       <p className="article__containerOne--likes"> 110,985 </p> */}

//       <hr></hr>
//     </div>
//   )
// }
// export default ArticleOne

function ArticleOne() {
  return (
    <div className="article__container">
      <p className="article__container--date">07/11/2021</p>{' '}
      <span>
        {' '}
        <p className="article__container--likes"> 110,985 </p>{' '}
      </span>
    </div>
  )
}
export default ArticleOne
