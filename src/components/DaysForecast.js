import React from 'react';
import DayForecast from './DayForecast';
import {localizeDate} from "../utils/utils";

export default function DaysForecast({days}) {
    const dayForecasts = [];

    if (days) {
        for (let i = 0; i < days.length; i++) {
            const day = days[i];
            dayForecasts.push(
                <DayForecast
                    key={i}
                    date={localizeDate(day.datetime)}
                    icon={day.icon}
                    highTemp={day.tempmax}
                    lowTemp={day.tempmin}
                />
            );
        }
    }

    return (
        <div className="d-flex flex-column p-5 bg-body-transparent rounded-4">
            <p className="h4 text-muted text-uppercase pb-2">Days Forecast</p>
            {dayForecasts}
        </div>
    );
}
