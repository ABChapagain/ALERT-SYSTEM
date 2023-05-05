import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
      <div className='grid grid-flow-col gap-4'>
        <Link to={'/explore'} className='link link-hover'>
          Explore
        </Link>
        <Link to={'/about-us'} className='link link-hover'>
          About us
        </Link>
        <Link to={'/contact-us'} className='link link-hover'>
          Contact Us
        </Link>
      </div>

      <div>
        <p>Copyright © 2023 - All right reserved by Alertigo</p>
      </div>
    </footer>
  )
}

export default Footer
