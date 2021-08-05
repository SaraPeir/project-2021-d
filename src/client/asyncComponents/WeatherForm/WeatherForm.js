import React from 'react'


const WeatherForm = () => {
    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                console.log('HOLAAA')
                }}
        >
            <div class="mb-3">
                <label htmlFor="provinceInput" class="form-label">Provincia</label>
                <input type="text" class="form-control" id="provinceInput" />

                <div className="d-grid gap-2 mx-auto col-6 p-3">
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default WeatherForm