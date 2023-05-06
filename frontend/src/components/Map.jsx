// Map.js
import React, { useRef, useEffect } from 'react'

function Map({ lat, lng, markers, theme, markerImage }) {
  const mapRef = useRef(null)

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
    })
  }, [lat, lng, markers, markerImage, theme])

  return <div ref={mapRef} style={{ width: '100%', height: '550px' }} />
}

export default Map
