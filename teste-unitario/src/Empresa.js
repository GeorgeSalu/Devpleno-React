import React from 'react'
import Map from './MapGoogle'

const Empresa = ({ companyName, location }) => {
  return (
    <div>
      <p data-testid='company-name'>{companyName}</p>
      <Map location={location} />
    </div>
  )
}

export default Empresa