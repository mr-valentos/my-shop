import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: 'product',
    initialState: {
      product: [
        {name: 'broccoli', category: 'vegetables', description: 'fresh broccoli', rating: 4, price: 8.99, discount: false, id: 1},
        {name: 'cabbage', category: 'vegetables', description: 'fresh cabbage', rating: 4, price: 5.99, discount: false, id: 2},
        {name: 'yoghurt', category: 'milk products', description: 'yoghurt 1.5%', rating: 4, price: 0.99, discount: false, id: 3},
        {name: 'butter', category: 'milk products', description: 'butter 40%', rating: 4, price: 4.99, discount: false, id: 4},
        {name: 'milk', category: 'milk products', description: 'milk 3.5%', rating: 4, price: 1.99, discount: false, id: 5},
        {name: 'milk ECO', category: 'milk products', description: 'milk 0%', rating: 4, price: 3.99, discount: false, id: 6},
      ]
    },
    reducers: {
      // Header
    //   addTask: (state) => state.product.push({hh:hh})
    
    }
  })

  export default productSlice.reducer
  export const {addTask} = productSlice.actions