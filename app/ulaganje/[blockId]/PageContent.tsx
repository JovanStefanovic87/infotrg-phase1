'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { contentData, contentBlocksData } from '../ulaganjeData';
import ImageModal from '../../components/modals/ImageModal';
import ImageBlock from '../../components/image/ImageBlock';
import TextWrapped from '../../components/text/TextWrapped';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import OrderedList from '@/app/components/text/OrderedList';
import H2 from '@/app/components/text/H2';
import TextNormal from '@/app/components/text/TextNormal';
import Devider2 from '@/app/components/ui/Devider2';
import H3 from '@/app/components/text/H3';

const PageContent: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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

  const block = contentData.find((item) => item.id === blockId);
  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block) return <p>Block not found</p>;

  return (
    <PageContainer>
      <H1 title={block.title} />
      <div className='relative pt-6 bg-gradient-white shadow-md rounded-lg p-4'>
        {contentBlocks.length > 0 &&
          contentBlocks.map((block: any, index: number) => (
            <div key={index}>
              {block.type === 'text' ? (
                <TextWrapped block={block.content || ''} />
              ) : block.type === 'image' ? (
                Array.isArray(block.url) ? (
                  block.url.map((image: string, imgIndex: number) => (
                    <ImageBlock
                      key={imgIndex}
                      image={image}
                      imgIndex={imgIndex}
                      openImageModal={openImageModal}
                    />
                  ))
                ) : (
                  <ImageBlock
                    key={index}
                    image={block.content || ''}
                    imgIndex={index}
                    openImageModal={openImageModal}
                  />
                )
              ) : block.type === 'paragraph1' || block.type === 'paragraph2' ? (
                <TextWrapped block={block.content || ''} />
              ) : block.type === 'hr' ? (
                <Devider2 marginY={12} height={block.height} />
              ) : block.type === 'list' ? (
                <OrderedList items={[block]} />
              ) : block.type === 'h2' ? (
                <H2 text={block.content} align='center' color='black' />
              ) : block.type === 'h3' ? (
                <H3 text={block.content} align='center' />
              ) : block.type === 'pNormal' ? (
                <TextNormal
                  text={block.content}
                  weight={block.weight}
                  paddingLeft={block.paddingLeft}
                  align={block.align}
                />
              ) : block.type === 'H2BoldCenter' ? (
                <H2 text={block.content} weight='bold' align='center' color='black' />
              ) : null}
            </div>
          ))}
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default PageContent;
