import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"


//

const NewsContxt = createContext()

export const useNewsContext = () => {
    return useContext(NewsContxt)
}

export const NewsProvider = ({ children }) => {
    const API_KEY = "4bb5c7b6330f4c82bc55d336413e0b88"

    const BASE_URL = "https://newsapi.org/v2"

    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    const [currentPage,setCurrentPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    const [category,setCategory]=useState("")
    const [query,setQuery]=useState("")



    const fetchNews=async()=>{
        setLoading(true)
        setError(null)
        try{
        const response = await axios.get(`${BASE_URL}/top-headlines?apiKey=${API_KEY}&country=us&page=${currentPage}&pageSize=3&category=${category}&q=${query}`)
         
            setArticles(response.data.articles)
            setTotalResults(response.data.totalResults)
        }
        catch (err){
            setError("could not fetch the news,please try again later")
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchNews()
    },[currentPage,category,query])

    const changeCategory=(newCategory)=>{
        setCategory(newCategory)
    }
    return(
    <NewsContxt.Provider value={{articles,loading,error,fetchNews,setCurrentPage,totalResults,currentPage,category,changeCategory,setQuery}}>
        {
            children
        }
    </NewsContxt.Provider>
    )
}