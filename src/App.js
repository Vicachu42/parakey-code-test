import 'bootswatch/dist/cerulean/bootstrap.min.css';
import Forecasts from './components/Forecasts';
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <p>{process.env.WEATHER_API_KEY}</p>
      <Forecasts />
    </div>
  )
}

export default App

