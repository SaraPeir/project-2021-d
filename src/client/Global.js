import React from "react"
import Tasks from './components/Tasks'
import Countdown from './asyncComponents/Countdown'
import { useSelector, useDispatch } from 'react-redux'
import { showCountdown } from '../redux/slices/countdownShower'

const Global = (props) => {
    const isCountdownDisplayed = useSelector((state) => {
        console.log('state', state)
        return state.countdownShower.value
    })

    const countdown = () => {
        if(isCountdownDisplayed) {
            return <Countdown />
        }
        return;
    }

    const arrayFromFetch = props.arrayFromFetch;
    const showInConsole = (arrayFromFetch) => console.log(arrayFromFetch);
    const dispatch = useDispatch()

    return(
        <React.Fragment>
            <button onClick={() => dispatch(showCountdown())}>See how miss to 2022</button>
            <Tasks />
            {countdown()}
            {showInConsole(arrayFromFetch)}
        </React.Fragment>
    )
}

export default Global;