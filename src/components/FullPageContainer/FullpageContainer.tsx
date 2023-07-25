import { FC, PropsWithChildren } from 'react';

const FullPageContainer: FC<PropsWithChildren<{ count: number }>> = ({ count, children }) => {
  const containerClass =
    'mx-auto flex h-screen flex-col items-center justify-center py-10 text-center';

  return <div className={containerClass + ` bg-slate-${900 - 100 * count}`}>{children}</div>;
};

export default FullPageContainer;
