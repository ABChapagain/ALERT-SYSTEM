import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import SuchanaContext from '../context/SuchanaContext'

const HeroSection = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0()
  const [cordinates, setCordinates] = React.useState({})

  const { currentUser } = useContext(SuchanaContext)

  function getCordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      setCordinates({
        lat: position.coords.latitude,
        lang: position.coords.longitude,
      })
    })
  }
  useEffect(() => {
    getCordinates()
  }, [])

  async function postAlert() {
    // get latitude and longitude

    fetch('/api/alerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Elephant Near you',
        message: `There is an elephant near ${user?.name}'s locality, please be careful`,
        location: {
          lat: cordinates?.lat,
          lang: cordinates?.lang,
        },
        user: currentUser?._id,
        alertType: 'elephant',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        var my_model = document.getElementById('my-modal')
        my_model.checked = false
        alert('Alert posted')
        navigate('/alerts/' + data._id)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='relative bg-gray-100 pt-16 pb-32 md:pt-32 md:pb-48 lg:pt-40 lg:pb-64'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Welcome to </span>{' '}
            <span className='block text-indigo-600 xl:inline'>Suchana</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            A platform designed to provide rapid response to authorities in the
            event of an emergency social problems withing a given locality.
          </p>
          <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <label
                htmlFor='my-modal'
                onClick={() => {
                  if (!isAuthenticated) {
                    navigate('/auth')
                  }
                }}
                className='btn'
              >
                Emergency? Alert now!!!
              </label>

              {/* Put this part before </body> tag */}
              <input type='checkbox' id='my-modal' className='modal-toggle' />
              <div className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg'>
                    You are about to send an Alert!
                  </h3>
                  <p className='py-4'>
                    Hello{' '}
                    <span className='text text-warning'>{user?.nickname}</span>,
                    you are about to send an alert to the community, be sure
                    that you have read our{' '}
                    <span className='text text-primary'>
                      Terms and conditions
                    </span>{' '}
                    and{' '}
                    <span className='text text-primary'>Privacy policy</span>{' '}
                    before posting any fake alerts, we may even take{' '}
                    <span>Legal actions</span> for violating the conditions
                  </p>
                  <div className='modal-action'>
                    <label className='btn' htmlFor='my-modal'>
                      Cancel
                    </label>
                    <label
                      onClick={() => postAlert()}
                      className='btn btn-primary'
                    >
                      I am aware, let me send an Alert
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
