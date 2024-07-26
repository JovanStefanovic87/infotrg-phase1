'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fullDescriptionDataLinksData, contentBlocksData } from './fullDescriptionData';
import ImageModal from '../../../components/modals/ImageModal';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import ContentBlock from './ContentBlock';

const PageContent: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [columns, setColumns] = useState<number | null>(null);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const pathname = usePathname();
  const blockId: string = pathname.split('/').pop() || '';

  const block = fullDescriptionDataLinksData.find((item) => item.id === blockId);

  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block || columns === null) return null;

  const renderGrid = () => {
    const rows: JSX.Element[] = [];
    const totalBlocks = contentBlocks.length;
    const maxColumns = Math.min(columns || 1, 3);

    let rowIndex = 0;

    while (rowIndex < totalBlocks) {
      const rowItems = contentBlocks.slice(rowIndex, rowIndex + maxColumns);

      let colWidth;
      if (rowItems.length === 1) {
        colWidth = `calc(${100}%)`;
      } else if (rowItems.length === 2) {
        colWidth = `calc(${50}%)`;
      } else {
        colWidth = `calc(${100 / maxColumns}%)`;
      }

      rows.push(
        <div
          key={rowIndex}
          className='grid sm:grid-cols-2 md:grid-cols-3'
          style={{ gridTemplateColumns: `repeat(${maxColumns}, ${colWidth})` }}
        >
          {rowItems.map((block: any, index: number) => (
            <div key={index} style={{ gridColumn: `span 1` }}>
              <ContentBlock
                title={block.coverImage}
                description={block.description}
                coverImage={block.coverImage}
                contentBlocks={[]}
                openContentModal={() => openImageModal(block.coverImage)}
              />
            </div>
          ))}

          {Array(maxColumns - rowItems.length)
            .fill(null)
            .map((_, emptyIndex) => (
              <div key={`empty-${emptyIndex}`} />
            ))}
        </div>,
      );

      rowIndex += maxColumns;
    }

    return rows;
  };

  return (
    <PageContainer>
      <H1 title='POSLOVNA SARADNJA' pb='0' />
      <div className='pb-4 sm:pb-10'>
        <H2Title text={block.label.toUpperCase()} padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden'>{renderGrid()}</div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default PageContent;
