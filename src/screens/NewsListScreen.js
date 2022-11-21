import React, { useEffect } from 'react'
import Card from '../components/Card'
import {useSelector , useDispatch} from 'react-redux';
import { addArticle } from '../redux/slice';


const NewsListScreen =(props)=>{
 
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch()
  // })
 
  
   
  return (
        <Card navigation={props.navigation} />
  
    )
  
}


export default NewsListScreen;