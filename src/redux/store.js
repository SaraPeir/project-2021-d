import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import weatherShowerReducer from './slices/weatherShower'
import fetchWeatherReducer from './slices/fetchWeather'

export default configureStore({
  reducer: {
      weatherShower: weatherShowerReducer,
      fetchWeather: fetchWeatherReducer,
  },

  // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
  middleware: getDefaultMiddleware({
    serializableCheck: false
 })
})