'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { contentData } from './ulaganjeData';
import ContentBlock from './ContentBlock';
import H1 from '../components/text/H1';
import PageContainer from '../components/containers/PageContainer';

const InvestContent: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <H1 title='MOGUĆNOST ULAGANJA' />

      <div className='lg:grid lg:grid-cols-3 lg:gap-8 rounded-md overflow-hidden'>
        {contentData.map((block) => (
          <Link key={block.id} href={`/ulaganje/${block.id}`}>
            <ContentBlock
              title={block.title}
              description={block.description}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          </Link>
        ))}
      </div>
    </PageContainer>
  );
};

export default InvestContent;
