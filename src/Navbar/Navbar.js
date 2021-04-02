import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const itemsFun = (item) => {
    return <li><Link className='nav-items'>{item}</Link></li>
  }
  return <section className='nav-section'>
    <nav className='nav-container'>
      <ul className='nav-list'>
        {itemsFun('Home Menu')}
        {itemsFun('About')}
        {itemsFun('Rooms')}
        {itemsFun('Service')}
        {itemsFun('Gallery')}
        {itemsFun('Contact')}
        <li><button className='btn'>Book a Room</button></li>
      </ul>
    </nav>
  </section>
}

export default Navbar
