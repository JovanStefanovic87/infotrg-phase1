'use client';
import React, { useState } from 'react';
import ContentBlockContainer from '../../components/containers/ContentBlockContainer';
import CoverImage from '../../components/image/CoverImage';
import { ContentBlockItem } from '../../helpers/types';
import ImageModal from '@/app/components/modals/ImageModal';
import Devider from '@/app/components/ui/Devider';
import BlockText from '@/app/components/text/BlockText';
import BlockTitileWrap from '@/app/components/text/BlockTitileWrap';
import ContentModalInnerContainer from '@/app/components/containers/ContentModalInnerContainer';
import ContentModalContainer from '@/app/components/containers/ContentModalContainer';
import ContentDisplay from './ContentDisplay';

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
  openContentModal?: (contentBlocks: ContentBlockItem[]) => void;
  content?: any;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  coverImage,
  contentBlocks,
  openContentModal,
  content,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    if (openContentModal) {
      openContentModal(contentBlocks);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContentBlockContainer
        contentBlocks={contentBlocks}
        openContentModal={handleOpenModal}
        isLink={false}
        useModal={true}
      >
        <div className='w-full p-2 h-auto rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
          <div className='flex flex-col h-full bg-gradient-white p-4 rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
            <BlockTitileWrap text={title} />
            {coverImage && (
              <div className='mt-4'>
                <CoverImage src={coverImage} alt={title} />
              </div>
            )}
            <BlockText description={description} maxLines={2} align='center' />
            <div className='mt-auto'>
              <button
                className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'
                onClick={handleOpenModal}
              >
                Vidi još
              </button>
            </div>
          </div>
        </div>
      </ContentBlockContainer>

      {isModalOpen && (
        <ContentModalContainer onContentModalClose={handleCloseModal}>
          <ContentModalInnerContainer>
            <ContentDisplay data={content} />
          </ContentModalInnerContainer>
        </ContentModalContainer>
      )}
    </>
  );
};

export default ContentBlock;
