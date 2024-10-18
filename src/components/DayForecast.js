import React from 'react';

export default function DayForecast({date, icon, highTemp, lowTemp}) {
    return (
        <div className="d-flex flex-row align-items-center py-3 ">
            <p className="col-6 h4 mb-0">{date}</p>
            <img className="col-2" src={"/" + icon + ".svg"} style={{width: '50px'}} alt={icon}/>
            <p className="h3 col-4 mb-0 text-end">
                <span className="fw-bold">{highTemp}</span>/{lowTemp}
            </p>
        </div>
    )
}
