import Map from '../../components/Map'
import { useContext } from 'react'
import SuchanaContext from '../../context/SuchanaContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AlertView = () => {
  const { id } = useParams()

  const { singleAlert, fetchSingleAlert } = useContext(SuchanaContext)

  useEffect(() => {
    if (!singleAlert) {
      fetchSingleAlert(id)
    }
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
      <div className='h-[500px]'>
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertView
