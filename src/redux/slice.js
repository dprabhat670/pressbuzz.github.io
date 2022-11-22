import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
	'fetchnewsdata',
	async () => {
	  const res = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-11-21&sortBy=popularity&apiKey=12735be93933463abd09d7f98cc28111').then((res)=>res.json())
	  }
  )

const initialState = {
articles: [],
favourite: []
};

const newsSlice = createSlice({

// An unique name of a slice
name: 'news',

// Initial state value of the reducer
initialState,

// Reducer methods
reducers: {
	addArticle: (state, { payload }) => {
	state.articles.push(payload);
	},

	addFavourite: (state, { payload }) => {
	state.favourite.push(payload);
	},
},
extraReducers: ()=> {
   
    (fetchNews.fulfilled, (state, action) => {
  
      state.articles.push(action.payload);
	  
    })
	
  }
});

// Action creators for each reducer method
export const { addArticle,addFavourite }
			= newsSlice.actions;
			
export default newsSlice.reducer;
