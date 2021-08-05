import { configureStore } from '@reduxjs/toolkit'
import weatherShowerReducer from './slices/weatherShower'

export default configureStore({
  reducer: {
      weatherShower: weatherShowerReducer
  },
})