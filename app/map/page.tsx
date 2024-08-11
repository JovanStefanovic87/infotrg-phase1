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
