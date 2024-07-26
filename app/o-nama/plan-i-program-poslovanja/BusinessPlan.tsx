'use client';
import React, { useState, useEffect } from 'react';
import { contentData as rawContentData, listOfLinks as rawListOfLinks } from './BussinessPlanData';
import ContentBlock from './ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import ContentBlockLinks from './ContentBlockLinks';
import Devider2 from '@/app/components/ui/Devider2';
import renderGridSystem from '@/app/helpers/renderGridSystem';

interface BasicInformation {
  id: string | undefined;
  title: string;
  description: string;
  date?: string;
  coverImage: string;
}

const BussinesPlan: React.FC = () => {
  const [columns, setColumns] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setColumns(3);
      } else if (width >= 1024) {
        setColumns(2);
      } else if (width >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  if (columns === null) return null;

  const contentData = rawContentData.filter(
    (item): item is BasicInformation & { id: string } => item.id !== undefined,
  );

  const listOfLinks = rawListOfLinks.filter(
    (item): item is BasicInformation & { id: string } => item.id !== undefined,
  );

  return (
    <PageContainer>
      <H1 title='PLAN I PROGRAM POSLOVANJA' pb='0' />
      <div className='p-2 pb-4 sm:pb-10'>
        <H2Title text='SAŽET PRIKAZ PLANA I PROGRAMA POSLOVANJA' padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData,
          columns,
          useLink: false,
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description}
              date={block.date || ''} // Ensure date is passed here
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
      </div>
      <H2Title text='OPŠIRNIJI PRIKAZ PLANA I PROGRAMA POSLOVANJA' padding={24} />
      <div className='bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData: listOfLinks,
          columns,
          useLink: true,
          path: '/o-nama/plan-i-program-poslovanja/',
          children: (block) => (
            <ContentBlockLinks
              title={block.title}
              description={block.description}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
        <div className='flex sm:hidden'>
          <Devider2 marginY={4} />
        </div>
      </div>
    </PageContainer>
  );
};

export default BussinesPlan;
