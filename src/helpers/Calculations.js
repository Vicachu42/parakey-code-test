export const getMinimumTemperature = (data) => {
  const temp = data.map(item => item['main']['temp'])
  return Math.round(Math.min(...temp))
}

export const getMaximumTemperature = (data) => {
  const temp = data.map(item => item['main']['temp'])
  return Math.round(Math.max(...temp))
}

export const getMedianTemperature = (data) => {
  const temp = data.map(item => item['main']['temp'])
  if (temp.length === 0) {
    return
  }

  temp.sort((a, b) => a - b)
  const midpoint = Math.floor(temp.length / 2)
  const median = temp.length % 2 === 1 ?
    temp[midpoint] :
    (temp[midpoint - 1] + temp[midpoint]) / 2
  return Math.round(median)
}

export const getAverageTemperature = (data) => {
  const temp = data.map(item => item['main']['temp'])

  const average = temp.reduce((a, b) => a + b, 0) / temp.length
  return Math.round(average)
}