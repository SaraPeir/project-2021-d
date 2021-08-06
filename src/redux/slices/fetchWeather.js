import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// thunk (necessary to fetch and handle promises)
// https://redux-toolkit.js.org/api/createAsyncThunk
const fetchWeatherThunk = createAsyncThunk(
    'fetchWeather/fetchByProvId',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${id}`);
            return response
           } catch (err) {
            return thunkAPI.rejectWithValue({}, err);
           }
    }
  )

export const fetchWeatherSlice = createSlice({
  name: 'fetchWeather',
  initialState: {
    value: {},
    hasWeatherData: false,
    hasError: false,
    isLoading: false
  },
  extraReducers: {
    [fetchWeatherThunk.fulfilled]: (state, action)=> { 
        let data;
        
        try {
            data = action.payload.data
        } catch {
            data = null
        }
        state.value = data
        state.isLoading = false

        if(!data) {
            state.hasError = true
        }

        if(data && data.title && data.today && data.tomorrow && data.ciudades && data.ciudades.length) {
            state.hasWeatherData = true
        }
    },
    [fetchWeatherThunk.pending]: (state)=> {  
        state.isLoading = true
    },
    [fetchWeatherThunk.error]: (state)=> {  
        state.isLoading = false
        state.hasError = true
    },
  },
})

export {fetchWeatherThunk};
export default fetchWeatherSlice.reducer