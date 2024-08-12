import { NextPage } from 'next';
import MapContent from './MapContent';

export const metadata = {
  title: 'Infotrg | O nama',
  description: 'O nama',
};

const Map: NextPage = () => {
  return (
    <>
      <MapContent />
    </>
  );
};

export default Map;

/* const markers = [
    { id: '1', position: { lat: 46.08898824178309, lng: 19.646583762456302 }, title: 'Ilona str' },
    { id: '2', position: { lat: 46.088823583253536, lng: 19.646913332355243 }, title: 'Marko str' },
  ]; */
