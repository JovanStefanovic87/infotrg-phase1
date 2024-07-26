import React from 'react';
import ContentBlockContainer from '../../components/containers/ContentBlockContainer';
import BlockTitle from '../../components/text/BlockTitle';
import { ContentBlockItem } from '../../helpers/types';
import BlockText from '../../components/text/BlockText';
import Devider from '@/app/components/ui/Devider';

interface Props {
  title: string;
  description: string;
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
}

const ContentBlock: React.FC<Props> = ({ title, description, contentBlocks, openContentModal }) => {
  const maxLines = 20;

  return (
    <>
      <ContentBlockContainer contentBlocks={contentBlocks} openContentModal={openContentModal}>
        <div className='cursor-pointer w-full sm:p-2 h-auto rounded-md overflow-hidden'>
          <div className='flex flex-col h-full bg-gradient-white p-4 rounded-md overflow-hidden'>
            <BlockTitle text={title} />
            <BlockText description={description} maxLines={maxLines} />

            <div className='mt-auto'>
              <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'>
                Vidi još
              </button>
            </div>
          </div>
        </div>
      </ContentBlockContainer>
      <div className='flex sm:hidden'>
        <Devider marginY='4' />
      </div>
    </>
  );
};

export default ContentBlock;
