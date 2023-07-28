import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const MapboxAccessToken = 'pk.eyJ1IjoiZG9ub3RidWdtZSIsImEiOiJjbGtpaXlxYXEwYmQ2M2VtZ3N1ODJzcHVkIn0.wcrAG5QHGlx9nRr6fGvLOw';
const Map = ReactMapboxGl({
  accessToken: MapboxAccessToken,
});

const WorldMap = () => {
  const mapStyle = 'mapbox://styles/mapbox/streets-v11'; // You can use different Mapbox styles based on your preferences

  return (
    <Map
      style={mapStyle}
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    />
  );
};


export default WorldMap;
