import React from 'react'
import './Pagination.css'
const Pagination = ({currentPage,setCurrentPage,totalResults}) => {

    const pageSize=6;
    const totalPages=Math.ceil(totalResults/pageSize)
    const pageNumber =[]

    for (let i = 1; i <= totalPages; i++){
        pageNumber.push(i)
    }
    const handlePageClick=(pageNumber)=>{
        setCurrentPage(pageNumber)
        window.scrollTo({top:0,behavior:"smooth"})
    }
  return (
    <div className='number'>
      <button className='prev-btn' disabled={currentPage===1} onClick={()=>currentPage >1 && handlePageClick(currentPage-1)}>Prev</button>
      <ul>
        {pageNumber.map((pageNumber)=>(
            <li key={pageNumber} onClick={()=>handlePageClick(pageNumber)} className={`page-number ${pageNumber===currentPage ? "active" : ""}` }>{pageNumber}</li>
        ))
        }
      </ul>
      <button disabled={currentPage===totalPages} onClick={()=>currentPage< handlePageClick(currentPage +1)}>Next</button>
    </div>

  )
}

export default Pagination
