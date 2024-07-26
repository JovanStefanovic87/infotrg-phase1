import React, { ReactNode } from 'react';

interface Props {
  onContentModalClose: () => void;
  children: ReactNode;
}

const ContentModalContainer: React.FC<Props> = ({ onContentModalClose, children }) => {
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-75 z-50' onClick={onContentModalClose} />
      <div className='fixed flex flex-col w-11/12 lg:max-w-screen-lg max-h-main top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-auto'>
        {children}
      </div>
    </>
  );
};

export default ContentModalContainer;
