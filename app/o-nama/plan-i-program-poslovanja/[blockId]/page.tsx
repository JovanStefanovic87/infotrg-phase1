import { NextPage } from 'next';
import PageContent from './PageContent';

export const metadata = {
  title: 'Infotrg | Raspodela investicionog fonda',
  description: 'Pametna mogućnost ulaganja',
};

const Ppp: NextPage = () => {
  return (
    <>
      <PageContent />
    </>
  );
};

export default Ppp;
