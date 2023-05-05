import React from 'react'

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
                <svg className='w-16 h-16 text-gray-700' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20.7,7.3c-1.1-1.1-2.9-1.2-4.2-0.3l-7.3,4.4L7.8,7.1C7.4,6.8,7,6.7,6.6,6.7c-0.6,0-1.1,0.2-1.5,0.6L2.3,9.3C1.5,10.1,1.5,11.4,2.3,12.2l7.3,4.4l0,0c0.6,0.4,1.3,0.6,2,0.6s1.4-0.2,2-0.6l7.3-4.4C21.6,10.2,21.6,8.9,20.7,7.3z'
                  />
                </svg>
                <h3 className='text-xl font-medium text-gray-900 mt-4'>
                  Feature 1
                </h3>
                <p className='mt-2 text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus maximus faucibus tellus, vel tempor tellus
                  consectetur vitae. Nulla nec sapien ac eros tincidunt
                  hendrerit.
                </p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg'>
              <div className='p-6'>
                <svg className='w-16 h-16 text-gray-700' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20.7,7.3c-1.1-1.1-2.9-1.2-4.2-0.3l-7.3,4.4L7.8,7.1C7.4,6.8,7,6.7,6.6,6.7c-0.6,0-1.1,0.2-1.5,0.6L2.3,9.3C1.5,10.1,1.5,11.4,2.3,12.2l7.3,4.4l0,0c0..6,0.4,1.3,0.6,2,0.6s1.4-0.2,2-0.6l7.3-4.4C21.6,10.2,21.6,8.9,20.7,7.3z'
                  />
                </svg>
                <h3 className='text-xl font-medium text-gray-900 mt-4'>
                  Feature 2
                </h3>
                <p className='mt-2 text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus maximus faucibus tellus, vel tempor tellus
                  consectetur vitae. Nulla nec sapien ac eros tincidunt
                  hendrerit.
                </p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg'>
              <div className='p-6'>
                <svg className='w-16 h-16 text-gray-700' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M20.7,7.3c-1.1-1.1-2.9-1.2-4.2-0.3l-7.3,4.4L7.8,7.1C7.4,6.8,7,6.7,6.6,6.7c-0.6,0-1.1,0.2-1.5,0.6L2.3,9.3C1.5,10.1,1.5,11.4,2.3,12.2l7.3,4.4l0,0c0.6,0.4,1.3,0.6,2,0.6s1.4-0.2,2-0.6l7.3-4.4C21.6,10.2,21.6,8.9,20.7,7.3z'
                  />
                </svg>
                <h3 className='text-xl font-medium text-gray-900 mt-4'>
                  Feature 3
                </h3>
                <p className='mt-2 text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus maximus faucibus tellus, vel tempor tellus
                  consectetur vitae. Nulla nec sapien ac eros tincidunt
                  hendrerit.
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
