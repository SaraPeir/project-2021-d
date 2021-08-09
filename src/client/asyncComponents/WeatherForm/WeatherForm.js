import React, {useState} from 'react'
import { showWeather } from '../../../redux/slices/weatherShower'
import {fetchWeatherThunk} from '../../../redux/slices/fetchWeather'
import { useDispatch } from 'react-redux'

const WeatherForm = ({provinces}) => {
    let options = [];
    let codProv;
    const dispatch = useDispatch()
    const [optionValue, setOptionValue] = useState(undefined);

    if(optionValue) {
        const selectedProvince = provinces.find(prov => prov.CAPITAL_PROVINCIA === optionValue)
        codProv = selectedProvince.CODPROV
    }

    for (let i = 1; i <= provinces.length; i++) {
        options.push(
            <option key={i} value={provinces[i-1].CAPITAL_PROVINCIA}>{provinces[i-1].CAPITAL_PROVINCIA}</option>
        );
    }
    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                dispatch(fetchWeatherThunk(codProv))
                dispatch(showWeather())
                }}
        >
            <div class="mb-3">
                <label htmlFor="provinceSelect" class="form-label">Selecciona la provincia</label>

                <select class="form-select" aria-label="provinceSelect" onChange={e => setOptionValue(e.target.value)}>
                   {options}
                </select>

                <div className="d-grid gap-2 mx-auto col-6 p-3">
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                        Envía
                    </button>
                </div>
            </div>
        </form>
    )
}

export default WeatherForm