import React, {useState} from "react"
import { Provider } from 'react-redux'
import store from '../redux/store'
import Global from "./Global"

const App = (props) => {
    return(
        <Provider store={store}>
            <Global provinces={props.provinces} />
        </Provider>
    )
}

export default App;
