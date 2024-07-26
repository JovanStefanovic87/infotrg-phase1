import ContentBlockContainer from '../components/containers/ContentBlockContainer';
import CoverImage from '../components/image/CoverImage';
import { ContentBlockItem } from '../helpers/types';
import BlockText from '@/app/components/text/BlockText';
import BlockTitileWrap from '@/app/components/text/BlockTitileWrap';

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
  openContentModal?: (contentBlocks: ContentBlockItem[]) => void;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  coverImage,
  contentBlocks,
  openContentModal,
}) => {
  return (
    <>
      <ContentBlockContainer
        contentBlocks={contentBlocks}
        openContentModal={() => openContentModal}
        isLink={true}
      >
        <div className='cursor-pointer w-full p-2 h-auto rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
          <div className='flex flex-col h-full bg-gradient-white p-4 rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
            <BlockTitileWrap text={title} />
            {coverImage && (
              <div className='mt-4'>
                <CoverImage src={coverImage} alt={coverImage} useModal />
              </div>
            )}
            <BlockText description={description} maxLines={2} align='center' />
            <div className='mt-auto'>
              <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'>
                Vidi još
              </button>
            </div>
          </div>
        </div>
      </ContentBlockContainer>
    </>
  );
};

export default ContentBlock;
