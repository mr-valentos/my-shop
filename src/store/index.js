

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from './sliceProduct'
import categorySlice from './sliceCategory'

const rootReduser = combineReducers({
    products: productSlice,
    categories: categorySlice,
})

export default configureStore({
    reducer: rootReduser,
});