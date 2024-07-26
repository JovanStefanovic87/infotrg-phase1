'use client';
import React, { useState, useEffect } from 'react';
import { contentData as rawContentData } from './aboutData';
import ContentBlock from './ContentBlock';
import H1 from '../components/text/H1';
import PageContainer from '../components/containers/PageContainer';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import { BasicInformation } from '@/app/helpers/types';

const AboutContent: React.FC = () => {
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
    (item): item is BasicInformation & { id: string; coverImage: string } =>
      item.id !== undefined && item.coverImage !== undefined,
  );

  return (
    <PageContainer>
      <H1 title='O NAMA' />
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData,
          columns: columns,
          useLink: true,
          path: '/o-nama/',
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description}
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
