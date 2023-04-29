import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
       <nav className='nav'>
          <div className='left'>
             <h4><Link to="/">Shopping Cart</Link></h4>
          </div>
          <div className='right'>
            <ul>
                <li>
                <Link to="/">Home Page</Link>
                  </li>
                <li>
                <Link to="/cart">Cart Page</Link>
                </li>
            </ul>
          </div>
       </nav>
    </div>
  )
}

export default Navbar