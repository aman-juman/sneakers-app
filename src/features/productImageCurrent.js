import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    index: 0
};


export const productImageCurrent = createSlice({
    name: 'indexImageProduct',
    initialState,
   reducers: {
        setIndexImage: (state, action) =>{
            state.index = action.payload;
        }
   }
});

export const {setIndexImage} = productImageCurrent.actions;
export default productImageCurrent.reducer;