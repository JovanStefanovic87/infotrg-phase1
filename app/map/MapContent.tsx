import React, { useState } from 'react';
import PageContainer from '../components/containers/PageContainer';
import useScrollToTop from '../helpers/useScrollToTop';
import { Map } from '@vis.gl/react-google-maps';
import MapMarkers from './MapMarkers';
import styles from '../components/map/Map.module.css';

const MapContent: React.FC = () => {
  useScrollToTop();

  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(10);

  return (
    <PageContainer>
      <Map
        center={center}
        zoom={zoom}
        className={styles.mapContainer}
        mapId={'3b269361fc781f1f'}
        mapTypeId='satellite'
        gestureHandling='greedy'
      >
        <MapMarkers setCenter={setCenter} setZoom={setZoom} center={center} zoom={zoom} />
      </Map>
    </PageContainer>
  );
};

export default MapContent;
