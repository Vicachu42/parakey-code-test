import axios from "axios"
import env from "react-dotenv"
import { getFutureDates } from "../helpers/FutureDates"

const API_KEY = env.WEATHER_API_KEY
const latitude = '57.710083'
const longitude = '11.9727685'
const units = 'metric'

const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`

const fetchForecasts = async () => {
  const limit = getFutureDates(4);

  try {
    const response = await axios.get(API_URL)
    const result = response.data.list.filter(item => Date.parse(item.dt_txt) < limit)
    return result
  } catch (err) {
    return err.message
  }
}

export default fetchForecasts