'use client';
import React, { useState } from 'react';
import ContentBlockContainer from '../../components/containers/ContentBlockContainer';
import CoverImage from '../../components/image/CoverImage';
import { ContentBlockItem } from '../../helpers/types';
import ImageModal from '@/app/components/modals/ImageModal';
import Devider from '@/app/components/ui/Devider';
import BlockText from '@/app/components/text/BlockText';

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  coverImage,
  contentBlocks,
  openContentModal,
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <>
      <ContentBlockContainer
        contentBlocks={contentBlocks}
        openContentModal={() => openContentModal}
        isLink={false}
      >
        <div className='cursor-pointer w-full sm:p-2 sm:h-100 h-auto rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
          <div className='flex flex-col h-full bg-gradient-white px-4 rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
            {coverImage && (
              <div className='mt-4'>
                <CoverImage src={coverImage} alt={title} openImageModal={openImageModal} useModal />
              </div>
            )}
            <BlockText description={description} maxLines={2} align='center' />
            <div className='block sm:hidden'>
              <Devider marginY='4' />
            </div>
          </div>
        </div>
      </ContentBlockContainer>

      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </>
  );
};

export default ContentBlock;
