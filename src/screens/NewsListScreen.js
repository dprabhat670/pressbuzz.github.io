import React, { useEffect } from 'react'
import Card from '../components/Card'
import {useSelector , useDispatch} from 'react-redux';
import { fetchNews} from '../redux/slice';


const NewsListScreen =(props)=>{
 
  const dispatch = useDispatch();
  
  const articles = useSelector((state) => state.news.articles);
 
 useEffect(()=>{
      dispatch(fetchNews(articles))
    },[dispatch])

  console.log(articles)

  return (
        <Card navigation={props.navigation} />
        
    )
  
}


export default NewsListScreen;