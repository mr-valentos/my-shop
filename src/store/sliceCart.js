import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: [
        {name: 'Broccoli', category: 'vegetables',subcategory:'broccoli', description: 'fresh broccoli', brand: 'Biofarm', rating: 5, price: 8.99, discount: false, id: 1},
        {name: 'Cabbage', category: 'vegetables',subcategory:'cabbage', description: 'fresh cabbage', brand: 'Biofarm', rating: 4, price: 5.99, discount: 10, id: 2},
      ]
    },
    reducers: {
      // Header
    //   addTask: (state) => state.product.push({hh:hh})
    
    }
  })

  export default cartSlice.reducer
  export const {addToCart} = cartSlice.actions