import React from 'react';
import HourForecast from './HourForecast';

export default function HoursForecast({hours}) {
    let filteredHours = [];
    if (hours) {
        filteredHours = hours.filter((hour) => {
            const time = hour.datetime.split(":")[0];
            return time % 4 === 0;
        }).map((hour) => {
            hour.datetime = hour.datetime.split(":").slice(0, 2).join(":");
            return hour;
        });
    }

    return (
        <div className="row py-4 justify-content-center g-4">
            {filteredHours.map((hour, index) => (
                <div className="col-md-2" key={index}>
                    <HourForecast
                        datetime={hour.datetime}
                        icon={hour.icon}
                        temp={hour.temp}
                    />
                </div>
            ))}
        </div>
    );
}
