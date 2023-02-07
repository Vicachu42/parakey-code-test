export const getMinimumTemperature = (data) => {
  const temperatures = data.map(item => item['main']['temp'])
  return Math.round(Math.min(...temperatures))
}

export const getMaximumTemperature = (data) => {
  const temperatures = data.map(item => item['main']['temp'])
  return Math.round(Math.max(...temperatures))
}

export const getMedianTemperature = (data) => {
  const temperatures = data.map(item => item['main']['temp'])
  if (temperatures.length === 0) {
    return
  }

  temperatures.sort((a, b) => a - b)
  const midpoint = Math.floor(temperatures.length / 2)
  const median = temperatures.length % 2 === 1 ?
    temperatures[midpoint] :
    (temperatures[midpoint - 1] + temperatures[midpoint]) / 2
  return Math.round(median)
}

export const getAverageTemperature = (data) => {
  const temperatures = data.map(item => item['main']['temp'])

  const average = temperatures.reduce((a, b) => a + b, 0) / temperatures.length
  return Math.round(average)
}