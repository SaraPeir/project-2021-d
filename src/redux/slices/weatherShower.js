import { createSlice } from '@reduxjs/toolkit'

export const weatherShowerSlice = createSlice({
  name: 'weatherShower',
  initialState: {
    value: false,
  },
  reducers: {
    showWeather: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      return {
        ...state,
        value: true
      }
      
    },
  },
})

/* export const weatherShowerSlice = createSlice({
  name: 'weatherShower',
  initialState: {
    value: false,
  },
  reducers: {
    showWeather: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      return {
        ...state,
        value: !state.value
      }
      
    },
  },
}) */

// Action creators are generated for each case reducer function
export const { showWeather } = weatherShowerSlice.actions

export default weatherShowerSlice.reducer