import React from 'react'
import './NewsCard.css'
import not from '../../assets/react.svg'
const NewsCard = ({article}) => {
    const handleError=(e)=>{
        e.target.src=not
    }

    const title = article.title.length > 30 ? article.title.slice(0,60)+"..." : article.title
    const description = article.description.length > 30 ? article.title.slice(0,120)+"..." : article.description

  return (
    <div className='news-card'>
      <img src={article.urlToImage} alt="" className='news-image' onError={handleError}/>
      <div className='news-content'>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={article.url}>Read More</a>
      </div>
    </div>
  )
}

export default NewsCard
