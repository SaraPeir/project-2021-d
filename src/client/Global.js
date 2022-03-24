import React from "react"
import Tasks from './components/Tasks'
import Accordion from './components/Accordion'
import WeatherForm from './asyncComponents/WeatherForm'
import Weather from './asyncComponents/Weather'
import { useSelector } from 'react-redux'

const Global = ({provinces}) => {
    const isWeatherDisplayed = useSelector((state) => {
        console.log('state', state)
        return state.weatherShower.value
    })

    const renderWeather = () => {
        // Weather component bundle is loaded only when isWeatherDisplayed is true (verify it in Chrome Network)
        if(isWeatherDisplayed) {
            return <Weather />
        }
        return;
    }

    const WeatherContent = () => {
        return(
            <React.Fragment>
                    <WeatherForm 
                        provinces={provinces} 
                    /> 
                {renderWeather()} 
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
           {
               // if provinces from server are not available, the
               // whole Accordion component is not displayed
               provinces.length && 
               <Accordion
                label={'weather-label'} 
                parentId={'weather-parent'} 
                target={'weather-target'} 
                n={1} 
                buttonContents={buttonContents} 
                bodyContents={bodyContents} 
            /> || null
           } 
            <Tasks />
        </React.Fragment>
    )
}

export default Global;