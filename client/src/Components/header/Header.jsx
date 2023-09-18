import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="nav p-2 bg-danger d-flex align-items-center justify-content-between">
      <div className="left_nav d-flex align-items-center">
        <h3 className="m-0 pe-3">GOLD</h3>
        <ul className="list-unstyled d-flex align-items-center m-0">
          <li className="mx-2"><Link to={'/home'}>Home</Link></li>
          <li className="mx-2"><Link to={'/movies'}>Movies</Link></li>
          <li className="mx-2"><Link to={'/tv'}>Tv</Link></li>
          <li className="mx-2"><Link to={'/people'}>People</Link></li>
        </ul>
      </div>
      <div className="right_nav d-flex align-items-center">
       <div className="social-media">
        <i className="fap fa-facebook"></i>
       </div>
        <ul className="list-unstyled d-flex align-items-center m-0">
          <li className="mx-2"><Link to={'/login'}>login</Link></li>
          <li className="mx-2"><Link to={'/'}>register</Link></li>
          <li className="mx-2"><Link to={'/'}>log out</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default Header
