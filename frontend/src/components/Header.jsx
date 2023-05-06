import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

const Header = () => {
  var { isAuthenticated, user, logout } = useAuth0()
  var [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(user)
  }, [isAuthenticated])

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

      {loading ? (
        <div className='navbar-end'>
          <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10'></div>
        </div>
      ) : (
        <div className='navbar-end'>
          {!isAuthenticated ? (
            <Link to={'/auth'} className='btn btn-ghost btn-sm rounded-btn'>
              Login
            </Link>
          ) : (
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='flex rounded-full'>
                  <img src={user.picture} referrerPolicy='no-referrer' />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a className='justify-between '>{user.name}</a>
                </li>
                <li>
                  <Link href={'/profile'} className='justify-between'>
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => logout()}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header
