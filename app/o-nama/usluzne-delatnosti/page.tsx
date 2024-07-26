import { NextPage } from 'next';
import BussinessCooperation from './ServiceActivities';

export const metadata = {
  title: 'Infotrg | Poslovna saradnja',
  description:
    'Infotrg je spreman za saradnju sa svim zainteresovanim kompanijama. Kontaktirajte nas i saznajte više o mogućnostima saradnje.',
};

const UsluzneDelatnosti: NextPage = () => {
  return (
    <>
      <BussinessCooperation />
    </>
  );
};

export default UsluzneDelatnosti;
