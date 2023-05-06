import Map from '../../components/Map'
import React from 'react'
import { useContext } from 'react'
import SuchanaContext from '../../context/SuchanaContext'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Recent from '../../components/Recent'

const AlertView = () => {
  const { id } = useParams()

  const { singleAlert, fetchSingleAlert } = useContext(SuchanaContext)
  var [postDate, setPostDate] = useState('')

  function getPostDate() {
    dayjs.extend(relativeTime)
    setPostDate(dayjs(singleAlert?.createdAt).fromNow())
  }

  useEffect(() => {
    if (!singleAlert) {
      fetchSingleAlert(id)
    }
    getPostDate()
  }, [id, singleAlert, fetchSingleAlert])
  console.log(singleAlert)

  // const markers = [
  //   { lat: 27.7125534, lng: 85.3423898, title: 'Deerwalk Complex' },
  // ]

  const markers = [
    {
      lat: Number(singleAlert?.location?.lat),
      lng: Number(singleAlert?.location?.lang),
      title: singleAlert?.user?.name,
    },
  ]

  const markerImage = {
    url: 'https://easydrawingguides.com/wp-content/uploads/2021/10/Elephant-step-by-step-drawing-tutorial-step-10.png',
    scaledSize: new window.google.maps.Size(100, 100),
  }

  const preventiveMeasure = [
    {
      title: 'Trip alarm',
      desc: 'You can use a variety of materials to create your trip alarm, such as bells, cans, or even pots and pans. Choose a material that will make a loud noise when it is triggered. ',
    },
    {
      title: 'Install warning systems',
      desc: 'Install warning systems such as sirens or alarms that can be activated in case of an elephant attack to alert nearby residents. ',
    },
    {
      title: 'Quick Response Team',
      desc: 'A quick response team is a trained team of personnel who are available at short notice to respond to any incidents of human-wildlife conflict, including elephant attacks. The team is usually equipped with communication equipment, tranquilizer guns, and other tools needed to manage the situation.  ',
    },
    {
      title: 'Bio-fencing',
      desc: 'Bio-fencing involves planting certain types of vegetation that are unpalatable to elephants around human settlements. This creates a natural barrier that elephants are less likely to cross. Some common plants used for bio-fencing include chilli-peppers, ginger, and lemon grass.  ',
    },
    {
      title: 'Solar Electric Fencing',
      desc: 'By using solar electric fencing, you can create a safe and effective barrier against elephant attacks and reduce the risk of human-wildlife conflict.',
    },
    {
      title: 'Avoid provoking them',
      desc: 'Do not provoke elephants or tease them. This can make them aggressive and lead to an attack.',
    },
  ]

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
      <Map
        lat={Number(singleAlert?.location?.lat)}
        lng={Number(singleAlert?.location?.lang)}
        markers={markers}
        theme={theme}
        markerImage={markerImage}
      />
      <div className=''>
        {/*h-[500px]*/}
        <div className='hero-content mx-auto mt-10 text-left'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl font-bold'>{singleAlert?.title}</h1>
            <p className='py-6'>{singleAlert?.message}</p>
            <div className='flex justify-between items-center mt-10'>
              <figure className='h-10 w-10'>
                <img
                  src={singleAlert?.user?.image}
                  alt='User'
                  referrerPolicy='no-referrer'
                  className='rounded-full'
                />
              </figure>
              <span>
                Posted By{' '}
                <span className='font-bold'>{singleAlert?.user?.name}</span>
                <span className='p-2'>({postDate})</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='hero-content flex-col justify-start mx-auto mt-10 text-left'>
          <div className='text'>
            <div className='text-2xl font-bold'>
              How to be safe from Elephant Attack?
            </div>
          </div>
          {preventiveMeasure.map((item, index) => (
            <div
              tabIndex={0}
              className='collapse collapse-arrow border border-base-300  bg-base-100 rounded-box max-w-2xl'
              key={index}
            >
              <div className='collapse-title text-xl font-medium'>
                {item.title}
              </div>
              <div className='collapse-content'>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Recent similar='Elephant' />
      </div>
    </>
  )
}

export default AlertView
