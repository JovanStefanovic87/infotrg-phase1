'use client';
import { contentData as rawContentData } from './aboutData';
import ContentBlock from '../components/blocks/ContentBlock';
import H1 from '../components/text/H1';
import PageContainer from '../components/containers/PageContainer';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import { BasicInformation } from '@/app/helpers/types';
import useScrollToTop from '../helpers/useScrollToTop';
import useResponsiveColumns from '../helpers/useResponsiveColumns';
import ContentDescriptionText from '../components/text/ContentDescriptionText';

const AboutContent: React.FC = () => {
  useScrollToTop();
  const columns = useResponsiveColumns(1);

  const contentData = rawContentData.filter(
    (item): item is BasicInformation & { id: string; coverImage: string } =>
      item.id !== undefined && item.coverImage !== undefined,
  );

  return (
    <PageContainer>
      <H1 title='O NAMA' />
      {/* <ContentDescriptionText
        text='Infotrg platforma je elektronski medij za pretragu proizvoda i njihovih lokacija prodaje, iznajmljivanje i uređivanje personalnih elektronskih prodavnica (veb izloga), kao i za objavljivanje i uređivanje zasebnih članaka o pojedinačnim proizvodima.'
        align='center'
        color='black'
      /> */}
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData,
          columns: columns,
          useLink: true,
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description || ''}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
      </div>
    </PageContainer>
  );
};

export default AboutContent;
