const ForecastsList = ({ forecasts }) => {
  return (
    <article className='table-container'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Average Temp</th>
            <th scope="col">Median Temp</th>
            <th scope="col">Minimum Temp</th>
            <th scope="col">Maximum Temp</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((days, i) => (
            <tr key={i}>
              <th scope="row">{days.date}</th>
              <td>{days.average}</td>
              <td>{days.median}</td>
              <td>{days.min}</td>
              <td>{days.max}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default ForecastsList