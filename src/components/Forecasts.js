import React, { useState, useEffect } from 'react'
import fetchForecasts from '../api/ApiForecasts';
import ForecastsList from './ForecastsList';

const Forecasts = () => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    async function listWeatherData() {
      const listedWeather = await fetchForecasts()
      setForecasts(listedWeather)
    }

    void listWeatherData()
  }, [])

  return (
    <div className='forecasts'>
      <h2>Göteborg</h2>
      {forecasts.length !== 0 ? <ForecastsList forecasts={forecasts} /> : <p>Loading</p>}
    </div>
  )
}

export default Forecasts