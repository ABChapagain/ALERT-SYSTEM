import React, { useRef, useEffect } from 'react'

function Map({ lat, lng, markers, theme, markerImage }) {
  const mapRef = useRef(null)
  const [selectedMarker, setSelectedMarker] = React.useState(null)

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker)
  }

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null)
  }

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 17,
      styles: theme,
    })
    markers.forEach(({ lat, lng, title }) => {
      new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title,
        icon: markerImage,
      })
      // get information onclick the marker
      const infowindow = new window.google.maps.InfoWindow({
        content: `<div>
                    <h3>${title}</h3>
                    <p>Latitude: ${lat}</p>
                    <p>Longitude: ${lng}</p>
                  </div>`,
      })
      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title,
        icon: markerImage,
      })
      marker.addListener('click', () => {
        infowindow.open(map, marker)
      })
    })
  }, [lat, lng, markers, markerImage, theme])

  return <div ref={mapRef} style={{ width: '100%', height: '550px' }} />
}

export default Map
