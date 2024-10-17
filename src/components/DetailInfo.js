import React from 'react';
import {getOrDefaultWithSuffix, removeSecondsFromTime} from "../utils/utils";

export default function DetailInfo({data}) {
    if (!data) {
        data = {
            feelslike: 0,
            windspeed: 0,
            sunrise: '',
            sunset: ''
        }
    } else {
        data.sunrise = removeSecondsFromTime(data.sunrise);
        data.sunset = removeSecondsFromTime(data.sunset);
    }

    return (
        <div className="d-flex justify-content-around p-5 bg-body-transparent rounded-4">
            <div className="">
                <div className="d-flex align-items-center pb-1">
                    <img src="/thermometer.png" alt="Real Feel Icon" className="me-1" style={{width: '25px'}}/>
                    <p className="text-muted h2 mb-0">Real Feel</p>
                </div>
                <p className="fw-bold h1 pb-4">{getOrDefaultWithSuffix(data.feelslike, "°")}</p>

                <div className="d-flex align-items-center pb-1">
                    <img src="/wind.png" alt="Wind Icon" className="me-2" style={{width: '25px'}}/>
                    <p className="text-muted h2 mb-0">Wind</p>
                </div>
                <p className="fw-bold h1">{getOrDefaultWithSuffix(data.windspeed, "km/h")}</p>
            </div>

            <div className="">
                <div className="d-flex align-items-center pb-1">
                    <img src="/sunrise.png" alt="Sunrise Icon" className="me-1" style={{width: '30px'}}/>
                    <p className="text-muted h2 mb-0">Sunrise</p>
                </div>
                <p className="fw-bold h1 pb-4">{getOrDefaultWithSuffix(data.sunrise)}</p>

                <div className="d-flex align-items-center pb-1">
                    <img src="/sunset.png" alt="Sunset Icon" className="me-1" style={{width: '40px'}}/>
                    <p className="text-muted h2 mb-0">Sunset</p>
                </div>
                <p className="fw-bold h1">{getOrDefaultWithSuffix(data.sunset)}</p>
            </div>
        </div>
    )
}