import { NextPage } from 'next';
import TimContent from './TimContent';

export const metadata = {
  title: 'Infotrg | Tim',
  description: 'Infotrg tim',
};

const Tim: NextPage = () => {
  return (
    <>
      <TimContent />
    </>
  );
};

export default Tim;
