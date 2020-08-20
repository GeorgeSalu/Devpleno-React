import React from 'react'

const Distance = ({ distance, metric }) => {
  let distanceStr = ''

  if(metric === 'metric') {
    distanceStr = distance.toFixed(2) + ' km'
  } else {
    const distanceMi = distance * 0.6213
    distanceStr = distanceMi.toFixed(2) + ' mi'
  }
  return <span>{distanceStr}</span>
}

export default Distance