import React from "react"
import Tasks from './components/Tasks'
import Accordion from './components/Accordion'
import WeatherForm from './asyncComponents/WeatherForm'
import Weather from './asyncComponents/Weather'
import { useSelector, useDispatch } from 'react-redux'
import { showWeather } from '../redux/slices/weatherShower'
import {fetchWeatherThunk} from '../redux/slices/fetchWeather'

const Global = ({provinces}) => {
    const isWeatherDisplayed = useSelector(async (state) => {
        console.log('state', state)
        return state.weatherShower.value
    })

    const dispatch = useDispatch()

    const weather = () => {
        if(isWeatherDisplayed) {
            return <Weather />
        }
        return;
    }

    const WeatherContent = () => {
        return(
            <React.Fragment>
                <WeatherForm provinces={provinces} /> 
                {weather()} 
            </React.Fragment>
        )
    }

    const buttonContents = [
        'El tiempo en España'
    ]

    const bodyContents = [
        <WeatherContent />
    ]

    return(
        <React.Fragment>
            <button onClick={() => dispatch(showWeather())}>See how miss to 2022</button>
            <button onClick={() => dispatch(fetchWeatherThunk('21'))}>fetch weather</button>
            <Accordion
                label={'labelA'} 
                parentId={'parendA'} 
                target={'targetA'} 
                n={1} 
                buttonContents={buttonContents} 
                bodyContents={bodyContents} 
            />
            <Tasks />
        </React.Fragment>
    )
}

export default Global;