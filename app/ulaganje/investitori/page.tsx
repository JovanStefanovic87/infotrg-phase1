import { NextPage } from 'next';
import Investors from './Investors';

export const metadata = {
  title: 'Infotrg | Ulaganje',
  description: 'Pametna mogućnost ulaganja',
};

const Invest: NextPage = () => {
  return (
    <>
      <Investors />
    </>
  );
};

export default Invest;
