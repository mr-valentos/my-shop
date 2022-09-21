import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: 'product',
    initialState: {
      product: [
        {name: 'Broccoli', category: 'vegetables',subcategory:'broccoli', description: 'fresh broccoli', brand: 'Biofarm', rating: 5, price: 8.99, discount: false, id: 1},
        {name: 'Cabbage', category: 'vegetables',subcategory:'cabbage', description: 'fresh cabbage', brand: 'Biofarm', rating: 4, price: 5.99, discount: 10, id: 2},
        {name: 'Yoghurt', category: 'milk products',subcategory:'yoghurt', description: 'yoghurt 1.5%', brand: 'Biofarm', rating: 3, price: 0.99, discount: false, id: 3},
        {name: 'Butter', category: 'milk products',subcategory:'butter', description: 'butter 40%', brand: 'ABC', rating: 4, price: 4.99, discount: false, id: 4},
        {name: 'Milk', category: 'milk products',subcategory:'milk', description: 'milk 3.5%', brand: 'ABC', rating: 4, price: 1.99, discount: false, id: 5},
        {name: 'Milk ECO', category: 'milk products',subcategory:'milk', description: 'milk 0%', brand: 'Biofarm', rating: 5, price: 3.99, discount: 30, id: 6},
      ]
    },
    reducers: {
      // Header
    //   addTask: (state) => state.product.push({hh:hh})
    
    }
  })

  export default productSlice.reducer
  export const {addTask} = productSlice.actions