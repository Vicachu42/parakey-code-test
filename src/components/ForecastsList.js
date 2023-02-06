import { getMinimumTemperature, getMaximumTemperature, getMedianTemperature, getAverageTemperature } from '../helpers/Calculations';

const ForecastsList = ({ forecasts }) => {
  return (
    <article className='table-container'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Average Temp</th>
            <th scope="col">Median Temp</th>
            <th scope="col">Minimum Temp</th>
            <th scope="col">Maximum Temp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>{getAverageTemperature(forecasts)}</td>
            <td>{getMedianTemperature(forecasts)}</td>
            <td>{getMinimumTemperature(forecasts)}</td>
            <td>{getMaximumTemperature(forecasts)}</td>
          </tr>
          {/*           {forecasts.map((weather) => (
            <tr key={weather.dt}>
              <th scope="row">Default</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          ))
          } */}
        </tbody>
      </table>
    </article>
  )
}

export default ForecastsList