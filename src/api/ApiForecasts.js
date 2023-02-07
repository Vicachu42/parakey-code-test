import axios from "axios"
import env from "react-dotenv"
import { datesAreOnSameDay } from "../helpers/Dates"
import { getMinimumTemperature, getMaximumTemperature, getMedianTemperature, getAverageTemperature } from '../helpers/Calculations';

const API_KEY = env.WEATHER_API_KEY
const latitude = '57.710083'
const longitude = '11.9727685'
const units = 'metric'

const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`

const fetchForecasts = async () => {
  try {
    const response = await axios.get(API_URL)
    const getDates = response.data.list.map(day => ({ ...day, date: new Date(day.dt_txt) }))

    const forecast = []
    const today = new Date()
    const currentDate = new Date()
    for (let i = 0; i < 4; i++) {
      currentDate.setDate(today.getDate() + i)
      let currentDataItems = getDates.filter(day => datesAreOnSameDay(day.date, currentDate))

      forecast.push({
        date: currentDataItems[0].dt_txt.split(" ")[0],
        min: getMinimumTemperature(currentDataItems),
        max: getMaximumTemperature(currentDataItems),
        median: getMedianTemperature(currentDataItems),
        average: getAverageTemperature(currentDataItems),
      })
    }

    return forecast
  } catch (err) {
    return err.message
  }
}

export default fetchForecasts