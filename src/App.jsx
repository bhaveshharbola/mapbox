import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './index.css';
import Tooltip from './components/Tooltip';
import ReactDOM from 'react-dom';
const MapboxAccessToken =
  'pk.eyJ1IjoiZG9ub3RidWdtZSIsImEiOiJjbGtpaXlxYXEwYmQ2M2VtZ3N1ODJzcHVkIn0.wcrAG5QHGlx9nRr6fGvLOw';

mapboxgl.accessToken = MapboxAccessToken;
const Map = () => {
  const mapContainerRef = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77, 20],
      zoom: 6,
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on('mouseenter', (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = '';
    });

    // add tooltip when users clicks over a point
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      if (features.length) {
        const feature = features[0];
        const { id, iso_3166_1 } = feature.properties;
        const data = { id, iso_3166_1 };
        if (iso_3166_1) {
          // Create tooltip node
          const tooltipNode = document.createElement('div');
          ReactDOM.render(<Tooltip data={data} />, tooltipNode);
          // Set tooltip on map
          tooltipRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(tooltipNode)
            .addTo(map);
        }
      }
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
