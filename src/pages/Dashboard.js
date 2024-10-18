import React, {useState, useEffect} from "react";
import {MainInfo} from "../components/MainInfo";
import DetailInfo from "../components/DetailInfo";
import DaysForecast from "../components/DaysForecast";
import HoursForecast from "../components/HoursForecast";
import {findTodayForecast, getWeatherData} from "../services/WeatherService";
import LoadingScreen from "../components/LoadingScreen"; // Import the loading screen

export default function Dashboard() {
    const [weatherData, setWeatherData] = useState(null);
    const [today, setToday] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        getWeatherData('Kolomyia,Ukraine')
            .then((data) => {
                setWeatherData(data);
                console.log(data);
                setToday(findTodayForecast(data.days));
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingScreen/>;
    }

    if (error) {
        return <div className="text-center my-5">Error fetching weather data: {error.message}</div>;
    }

    console.log(weatherData)

    return (
        <div className="row p-4 w-100">
            <div className="col-8">
                <MainInfo city={weatherData.address} description={weatherData.description} temp={weatherData.currentConditions.temp} icon={weatherData.currentConditions.icon}/>
                <HoursForecast hours={today.hours}/>
                <DetailInfo data={weatherData.currentConditions}/>
            </div>
            <div className="col-4">
                <DaysForecast days={weatherData.days}/>
            </div>
        </div>
    );
}
