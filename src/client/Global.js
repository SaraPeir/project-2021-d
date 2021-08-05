import React from "react"
import Tasks from './components/Tasks'
import Accordion from './components/Accordion'
import Weather from './asyncComponents/Weather'
import { useSelector, useDispatch } from 'react-redux'
import { showWeather } from '../redux/slices/weatherShower'

const Global = (props) => {
    const isWeatherDisplayed = useSelector((state) => {
        console.log('state', state)
        return state.weatherShower.value
    })

    const weather = () => {
        if(isWeatherDisplayed) {
            return <Weather />
        }
        return;
    }

    const dispatch = useDispatch()

    const buttonContents = [
        'Button content 1', 'Button content 2'
    ]

    const bodyContents = [
        'Body contents 1', 'Body content 2'
    ]

    return(
        <React.Fragment>
            <button onClick={() => dispatch(showWeather())}>See how miss to 2022</button>
            {weather()}

            

            <Accordion label={'labelA'} parentId={'parendA'} target={'targetA'} n={2} buttonContents={buttonContents} bodyContents={bodyContents} />
            <Tasks />
        </React.Fragment>
    )
}

export default Global;