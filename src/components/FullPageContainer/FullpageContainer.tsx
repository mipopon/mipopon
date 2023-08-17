import { FC, PropsWithChildren } from 'react';

const FullPageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-auto flex h-screen flex-col items-center justify-center py-10 text-center'>
      {children}
    </div>
  );
};

export default FullPageContainer;
