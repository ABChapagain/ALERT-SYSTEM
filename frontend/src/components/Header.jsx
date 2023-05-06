import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import SuchanaContext from '../context/SuchanaContext'

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth0()

  const { checkCurrentUser, currentUser } = useContext(SuchanaContext)

  useEffect(() => {
    user && checkCurrentUser(user)
  }, [user])
  console.log(currentUser)

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a href='explore'>Explore</a>
            </li>
          </ul>
        </div>
        <Link to={'/'} className='btn btn-ghost normal-case text-3xl'>
          <img
            className='img-fluid'
            src='https://i.ibb.co/vzQRjXJ/logo.png'
            width={100}
            alt='Logo'
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/explore'}>Explore</Link>
          </li>
        </ul>
      </div>

      <div className='navbar-end'>
        {!currentUser ? (
          <Link to={'/auth'} className='btn btn-ghost btn-sm rounded-btn'>
            Login
          </Link>
        ) : (
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='flex rounded-full'>
                <img
                  src={currentUser?.image}
                  referrerPolicy='no-referrer'
                  alt={currentUser?.name}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {currentUser?.role !== 'user' && (
                <li>
                  <Link to={'/admin/alerts'}>Admin ({currentUser.role})</Link>
                </li>
              )}
              <li>
                <button onClick={() => logout()}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
