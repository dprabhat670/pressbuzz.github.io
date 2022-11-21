import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice.js';

export default configureStore({
reducer: {
	news: reducer,
},
});
