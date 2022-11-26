import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { FlatList } from 'react-native';


const NewsListScreen =(props)=>{
 const [data , setData] = useState([]);

  const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-11-21&sortBy=popularity&apiKey=12735be93933463abd09d7f98cc28111'
  

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
    setData(json.articles)
  })
  .catch((error)=>console.log("Error hai" , error))
  },[])

  return (
    <FlatList
    data={data}
    keyExtractor={(item)=>item.url}
    renderItem={({item})=>(
     <Card navigation={props.navigation} 
     title={item.title}
     image={item.urlToImage}
     description={item.description}
     />
    
     )}

    />
      
        
    )
  
}


export default NewsListScreen;
