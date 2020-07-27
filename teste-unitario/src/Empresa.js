import React from 'react'
import Map from './MapGoogle'

const Empresa = ({ companyName, location }) => {
  return (
    <div>
      <p>{companyName}</p>
      <Map location={location} />
    </div>
  )
}

export default Empresa