import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: [
        
      ]
    },
    reducers: {
      // Header
    //   addTask: (state) => state.product.push({hh:hh})
    
    }
  })

  export default cartSlice.reducer
  export const {addToCart} = cartSlice.actions