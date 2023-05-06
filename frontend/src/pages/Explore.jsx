import React from 'react'
import Map from '../components/Map'
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import SuchanaContext from '../context/SuchanaContext'

const Explore = () => {
  const { fetchAlerts, alerts } = useContext(SuchanaContext)
  useEffect(() => {
    if (!alerts) {
      fetchAlerts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAlerts])

  const markers = [
    { lat: 27.7125534, lng: 85.3423898, title: 'Deerwalk Complex' },
    { lat: 27.712333, lng: 85.3398728, title: 'Deerwalk Services' },
    {
      lat: 27.712356,
      lng: 85.342357,
      title: 'Deerwalk Institute of Technology',
    },
    { lat: 27.7114432, lng: 85.342305, title: 'Deerwalk Learning Center' },
    { lat: 27.7120462, lng: 85.341067, title: 'Deerwalk Sifal School' },
  ]
  const markerImage = {
    url: 'https://i.ibb.co/GTv2byd/New-Project-6.png',
    scaledSize: new window.google.maps.Size(120, 120),
  }

  const theme = [
    {
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [
        {
          weight: '2.00',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#9c9c9c',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#f2f2f2',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#7b7b7b',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#46bcec',
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#c8d7d4',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#070707',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
  ]

  return (
    <>
      <div className='flex flex-col w-full p-5 lg:flex-row'>
        <div className='grid h-[550px] flex-grow card bg-base-300 rounded-box place-items-center'>
          <Map
            lat={27.712333}
            lng={85.3398728}
            markers={markers}
            theme={theme}
            markerImage={markerImage}
          />
        </div>
      </div>
      <div className='container mx-auto my-20'>
        <h1 className='text-3xl font-bold text-left mb-10'>Recent Alerts</h1>
        <div className='grid grid-cols-3 gap-4'>
          {alerts?.map((alert) => (
            <div
              key={alert._id}
              className='w-[100%] card mx-auto bg-base-100 shadow-xl'
            >
              <div className='card-body'>
                <Link to={`/alerts/${alert._id}`}>
                  <h2 className='card-title'>{alert.title}</h2>
                </Link>
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
      </div>
    </>
  )
}

export default Explore
