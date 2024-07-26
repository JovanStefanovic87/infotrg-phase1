'use client';
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { contentData } from './timData';
import ContentBlock from './ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import Link from 'next/link';
import renderGridSystem from '@/app/helpers/renderGridSystem';

const TimContent: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const renderGrid = () => {
    const rows: JSX.Element[] = [];
    const totalBlocks = contentData.length;
    const maxColumns = Math.min(columns || 1, 3);

    let rowIndex = 0;

    while (rowIndex < totalBlocks) {
      const rowItems = contentData.slice(rowIndex, rowIndex + maxColumns);

      let colWidth;
      if (rowItems.length === 1) {
        colWidth = `100%`;
      } else if (rowItems.length === 2) {
        colWidth = `50%`;
      } else {
        colWidth = `calc(${100 / maxColumns}%)`;
      }

      rows.push(
        <div
          key={rowIndex}
          className='grid items-stretch content-stretch justify-stretch'
          style={{ gridTemplateColumns: `repeat(${rowItems.length}, ${colWidth})` }}
        >
          {rowItems.map((block: any, index: number) => (
            <div key={index} style={{ gridColumn: `span 1` }}>
              <Link key={block.id} href={`/o-nama/tim/${block.id}`}>
                <ContentBlock
                  title={block.title}
                  name={block.name}
                  description={block.description}
                  coverImage={block.coverImage}
                  contentBlocks={[]}
                  openContentModal={() => {}}
                />
              </Link>
            </div>
          ))}
        </div>,
      );

      rowIndex += maxColumns;
    }

    return rows;
  };

  return (
    <PageContainer>
      <H1 title='INFOTRG TIM' />

      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGrid()}
      </div>
    </PageContainer>
  );
};

export default TimContent;
