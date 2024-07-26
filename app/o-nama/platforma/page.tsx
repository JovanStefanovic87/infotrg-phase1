import { NextPage } from 'next';
import PageContainer from '@/app/components/containers/PageContainer';
import PlatformContainer from './PlatformContainer';

const Platform: NextPage = () => {
  return (
    <PageContainer>
      <PlatformContainer />
    </PageContainer>
  );
};

export default Platform;
