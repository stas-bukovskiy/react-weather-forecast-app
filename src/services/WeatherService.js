const API_KEY = 'ZCBRVBDCGQFMFS34SWC4P9E5G';
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function getWeatherData(city) {
    const url = `${BASE_URL}/${city}?unitGroup=metric&key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // await new Promise(resolve => setTimeout(resolve, 2000));
    return await response.json();
}

export function findTodayForecast(days) {
    const kyivTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Kyiv' });

    const today = new Date(kyivTime).toISOString().split('T')[0];

    return days.find(day => day.datetime === today);
}
