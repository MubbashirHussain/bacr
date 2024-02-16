// store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Redux/imageSlice';

export const store = configureStore({
    reducer: {
        image: imageReducer,
    },
});
