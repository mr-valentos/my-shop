import { createSlice } from '@reduxjs/toolkit'


const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        category: [
            {value: 'all categories',
            label: 'All categories',},
            {
            value: 'milk products',
            label: 'Milk Products',
            products: [
                {value: 'milk', label: 'Milk',},
                {value: 'yoghurt', label: 'Yoghurt',},
            ]},
            {
            value: 'vegetables',
            label: 'Vegetables',
            products: [
                {value: 'broccoli', label: 'Broccoli',},
                {value: 'cabbage', label: 'Cabbage',},
                {value: 'cucumbers', label: 'Cucumbers',},
                {value: 'tomatoes', label: 'Tomatoes',},
            ]}
        ],
        brands : ['ABC', 'Biofarm']
    },
    reducers: {
      // Header
    //   addTask: (state) => state.product.push({hh:hh})
    
    }
  })

  export default CategorySlice.reducer
  export const {addCategory} = CategorySlice.actions