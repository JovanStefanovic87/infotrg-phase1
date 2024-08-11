'use client';
import PageContainer from '../components/containers/PageContainer';
import Map from '../components/map/Map';
import useScrollToTop from '../helpers/useScrollToTop';
import CustomMarker from '../components/map/CustomMarker';
import dynamic from 'next/dynamic';

const AboutContent: React.FC = () => {
  useScrollToTop();
  const Map = dynamic(() => import('../components/map/Map'), { ssr: false });
  const markers = [
    { id: '1', position: { lat: 46.08898824178309, lng: 19.646583762456302 }, title: 'Ilona str' },
    { id: '2', position: { lat: 46.088823583253536, lng: 19.646913332355243 }, title: 'Marko str' },
  ];
  return (
    <PageContainer>
      <Map markers={markers} />
    </PageContainer>
  );
};

export default AboutContent;
