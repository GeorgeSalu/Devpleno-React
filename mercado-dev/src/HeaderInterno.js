import React from 'react'

const HeaderInterno = (props) => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" to="/"><img alt="MercadoDev" src={null} height={80} /></a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderInterno