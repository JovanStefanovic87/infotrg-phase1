'use client';
import React, { useMemo } from 'react';
import PageContainer from '../components/containers/PageContainer';
import useScrollToTop from '../helpers/useScrollToTop';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import styles from '../components/map/Map.module.css';

const MapContent: React.FC = () => {
  useScrollToTop();

  const markers = useMemo(
    () => [
      {
        id: '1',
        position: { lat: 46.08898824178309, lng: 19.646583762456302 },
        title: 'Location 1',
      },
      {
        id: '2',
        position: { lat: 46.088823583253536, lng: 19.646913332355243 },
        title: 'Location 2',
      },
    ],
    [],
  );
  // Calculate the bounding box for the markers
  const bounds = markers.reduce(
    (acc, marker) => {
      return {
        minLat: Math.min(acc.minLat, marker.position.lat),
        maxLat: Math.max(acc.maxLat, marker.position.lat),
        minLng: Math.min(acc.minLng, marker.position.lng),
        maxLng: Math.max(acc.maxLng, marker.position.lng),
      };
    },
    {
      minLat: Infinity,
      maxLat: -Infinity,
      minLng: Infinity,
      maxLng: -Infinity,
    },
  );

  // Calculate the center and span of the bounding box
  const center = {
    lat: (bounds.minLat + bounds.maxLat) / 2,
    lng: (bounds.minLng + bounds.maxLng) / 2,
  };

  const latSpan = bounds.maxLat - bounds.minLat;
  const lngSpan = bounds.maxLng - bounds.minLng;

  // Convert the span into a zoom level
  // Adjust the zoom calculation as needed based on map projection
  const latZoom = Math.log2(360 / latSpan);
  const lngZoom = Math.log2(360 / lngSpan);
  const zoom = Math.min(latZoom, lngZoom) - 1; // Reduce zoom level for padding

  return (
    <PageContainer>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <Map
          defaultCenter={center}
          mapId={'3b269361fc781f1f'}
          className={styles.mapContainer}
          defaultZoom={Math.max(zoom, 1)}
          zoomControl={true}
          mapTypeId={'satellite'}
        >
          {markers.map((marker) => (
            <React.Fragment key={marker.id}>
              <AdvancedMarker
                position={marker.position}
                title={marker.title}
                onClick={() => handleMarkerClick(marker.position)}
              />
            </React.Fragment>
          ))}
        </Map>
      </APIProvider>
    </PageContainer>
  );
};

const handleMarkerClick = (position: google.maps.LatLngLiteral) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`;
  window.open(url, '_blank');
};

export default MapContent;
