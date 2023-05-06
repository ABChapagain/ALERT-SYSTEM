import React from 'react'
import Map from '../components/Map'
import { useEffect, useContext } from 'react'

import SuchanaContext from '../context/SuchanaContext'

const Explore = () => {
  const { fetchAlerts, alerts } = useContext(SuchanaContext)
  useEffect(() => {
    if (!alerts) {
      fetchAlerts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAlerts])

  console.log(alerts)

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

  const mak = alerts?.map((alert) => ({
    lat: alert.location.lat,
    lng: alert.location.lang,
    title: alert.user.name,
  }))

  const markerImage = {
    url: 'https://i.ibb.co/GTv2byd/New-Project-6.png',
    scaledSize: new window.google.maps.Size(60, 60),
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
    <div className='flex flex-col w-full p-5 lg:flex-row min-h-screen'>
      <div className='grid min-h-height flex-grow card bg-base-300 rounded-box place-items-center'>
        <Map
          lat={27.712333}
          lng={85.3398728}
          markers={markers}
          theme={theme}
          markerImage={markerImage}
          alerts={alerts}
        />
      </div>
    </div>
  )
}

export default Explore
