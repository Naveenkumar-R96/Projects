import React from 'react'
import './NewsCard.css'
import not from '../../assets/react.svg'
const NewsCard = ({article}) => {
    const handleError=(e)=>{
        e.target.src=not
    }
  return (
    <div className='news-card'>
      <img src={article.urlToImage} alt="" className='news-image' onError={handleError}/>
      <div className='news-content'>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <a href={article.url}>Read More</a>
      </div>
    </div>
  )
}

export default NewsCard
