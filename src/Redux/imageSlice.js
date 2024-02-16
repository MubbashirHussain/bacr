// imageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import img from '../components/1-removebg-preview.png'
import img1 from './Carrier-Aquaforce.jpg'
export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        selectedImage: img1,
    },
    reducers: {
        setSelectedImageRedux: (state, action) => {

            state.selectedImage = img1;
        },
    },
});

export const { setSelectedImageRedux } = imageSlice.actions;

export const selectImage = (state) => state.image.selectedImage;

export default imageSlice.reducer;
