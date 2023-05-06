import React from 'react'
import { ImLocation } from 'react-icons/im'
import { MdOutlineSecurity } from 'react-icons/md'
import { AiOutlineFieldTime } from 'react-icons/ai'

function Features() {
  return (
    <div>
      <section className='bg-white p-10'>
        <div className='max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-4xl font-extrabold text-gray-900 sm:text-5xl'>
              Our Features
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Learn about our amazing features and how they can benefit you.
            </p>
          </div>
        </div>
        <div className='mt-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            <div className='bg-white shadow-lg rounded-lg'>
              <div className='p-6'>
                <ImLocation size={25} />

                <h3 className='text-xl font-medium text-gray-900 mt-4'>
                  Geolocation Feature
                </h3>
                <p className='mt-2 text-gray-600'>
                  The geolocation feature in Suchana enables users to pinpoint
                  their location and receive alerts about elephant sightings,
                  movements, or attacks in their immediate vicinity, providing
                  them with critical information to take necessary precautions
                  and avoid conflicts with elephants.
                </p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg'>
              <div className='p-6'>
                <MdOutlineSecurity size={25} />
                <h3 className='text-xl font-medium text-gray-900 mt-4'>
                  Authenticated alerts
                </h3>
                <p className='mt-2 text-gray-600'>
                  By limiting access to the alerting function to authenticated
                  individuals, Suchana ensures that the information provided is
                  accurate, credible, and trustworthy, promoting effective
                  management of human-elephant conflicts and ensuring public
                  safety in affected areas.
                </p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg'>
              <div className='p-6'>
                <svg className='w-16 h-16 text-gray-700' viewBox='0 0 24 24'>
                  <AiOutlineFieldTime size={25} />
                </svg>
                <h3 className='text-xl font-medium text-gray-900 mt-4'>
                  Real time solution
                </h3>
                <p className='mt-2 text-gray-600'>
                  By delivering accurate and timely information in real-time,
                  Suchana enables users to respond proactively and prevent
                  potential conflicts with elephants, promoting human-elephant
                  coexistence in affected areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
