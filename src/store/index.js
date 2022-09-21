

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from './sliceProduct'
import categorySlice from './sliceCategory'
import filterSlice from './sliceFilter'
import cartSlice from './sliceCart'

const rootReduser = combineReducers({
    products: productSlice,
    categories: categorySlice,
    filters: filterSlice,
    cart: cartSlice,
})

export default configureStore({
    reducer: rootReduser,
});