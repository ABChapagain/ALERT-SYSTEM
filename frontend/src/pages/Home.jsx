import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import { useContext } from 'react'
import SuchanaContext from '../context/SuchanaContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const { fetchAlerts, alerts } = useContext(SuchanaContext)

  useEffect(() => {
    fetchAlerts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <HeroSection />
      <Features />
      <div className='container mx-auto my-20'>
        <h2 className='text-4xl text-center font-extrabold text-gray-900 sm:text-5xl'>
          Recent Posts
        </h2>
        <div className='grid grid-cols-3 gap-4 my-10'>
          {alerts?.slice(0, 6).map((alert) => (
            <div
              key={alert._id}
              className='w-[100%] card mx-auto bg-base-100 shadow-xl'
            >
              <div className='card-body'>
                <h2 className='card-title'>{alert.title}</h2>
                <p>{alert.message}</p>
                <div className='flex justify-between items-center mt-10'>
                  <figure className='h-10 w-10'>
                    <img
                      src={alert.user?.image}
                      alt='User'
                      className='rounded-full'
                    />
                  </figure>
                  <span>
                    Posted By{' '}
                    <span className='font-bold'>{alert.user?.name}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-end items-end'>
          <Link to={'/explore'} className='btn btn-primary'>
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
