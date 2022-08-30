import { createSlice } from '@reduxjs/toolkit'


const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      filter: {
        category: 'all categories',
        subcategory: '',
        productName: '',
        price: [0, 99],
        rating: [],
    }
    },
    reducers: {
      addFilter: (state, action) => {
        state.filter = {category: action.payload.currentCategory, productName: action.payload.searchValue}
      },
      addSubcategory: (state, action) => {
        state.filter = {...state.filter, subcategory: action.payload.subcategory}
      },
      addPriceFilter: (state, action) => {
        state.filter = {...state.filter, price: [action.payload.minPrice, action.payload.maxPrice]}
      },

    }
})

export default filterSlice.reducer
export const {addFilter, addSubcategory, addPriceFilter} = filterSlice.actions