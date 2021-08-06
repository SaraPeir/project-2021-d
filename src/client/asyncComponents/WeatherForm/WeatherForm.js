import React from 'react'


const WeatherForm = ({provinces}) => {
    const options = [];

    for (let i = 1; i <= provinces.length; i++) {
        options.push(
            <option key={i} value={provinces[i-1].CAPITAL_PROVINCIA}>{provinces[i-1].CAPITAL_PROVINCIA}</option>
        );
    }
    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                console.log('HOLAAA')
                }}
        >
            <div class="mb-3">
                <label htmlFor="provinceSelect" class="form-label">Selecciona la provincia</label>

                <select class="form-select" aria-label="provinceSelect">
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