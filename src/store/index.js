

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from './sliceProduct'
import categorySlice from './sliceCategory'
import filterSlice from './sliceFilter'

const rootReduser = combineReducers({
    products: productSlice,
    categories: categorySlice,
    filters: filterSlice
})

export default configureStore({
    reducer: rootReduser,
});