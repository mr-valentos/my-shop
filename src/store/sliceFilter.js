import { createSlice } from '@reduxjs/toolkit'


const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      filter: {
        category: 'all categories',
        subcategory: '',
        productName: '',
        brands: [],
        price: [0, 99],
        rating: [],
    }
    },
    reducers: {
      addFilter: (state, action) => {
        state.filter = {...state.filter, category: action.payload.currentCategory, productName: action.payload.searchValue}
      },
      addSubcategory: (state, action) => {
        state.filter = {...state.filter, subcategory: action.payload.subcategory}
      },
      addPriceFilter: (state, action) => {
        state.filter = {...state.filter, price: [action.payload.minPrice, action.payload.maxPrice]}
      },
      addRatingFilter: (state, action) => {
        state.filter.rating = action.payload.rating
      },
      // ==== brands ====

      addBrand: (state, action) => {
        state.filter.brands.push(action.payload.brand)
      },
      deleteBrand: (state, action) => {
        state.filter.brands = state.filter.brands.filter(i => i !== action.payload.brand)
      }
    }
})

export default filterSlice.reducer
export const {addFilter, addSubcategory, addPriceFilter, addRatingFilter, addBrand, deleteBrand} = filterSlice.actions