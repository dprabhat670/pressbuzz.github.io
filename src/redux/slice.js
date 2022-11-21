import { createSlice } from '@reduxjs/toolkit';

const initialState = {
article: [],
favourite: [],
};

const newsSlice = createSlice({

// An unique name of a slice
name: 'news',

// Initial state value of the reducer
initialState,

// Reducer methods
reducers: {
	addArticle: (state, { payload }) => {
	state.name.push(payload);
	},

	addFavourite: (state, { payload }) => {
	state.fav.push(payload);
	},
},
});

// Action creators for each reducer method
export const { addArticle,addFavourite }
			= newsSlice.actions;
			
export default newsSlice.reducer;
