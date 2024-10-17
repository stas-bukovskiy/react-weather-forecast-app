import React from 'react';

export default function HourForecast({ datetime, icon, temp }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-3 bg-body-transparent rounded-4">
            <p className="text-muted h4 pb-3">{datetime}</p>
            <img src={"/" + icon + ".svg"} alt={icon} className="pb-4" style={{width: 50 + '%'}}/>
            <p className="h2 fw-bold">{temp}°</p>
        </div>
    )
}
