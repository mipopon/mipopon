import { useRef } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import FullPageContainer from './components/FullPageContainer/FullpageContainer';

const App = () => {
  const myRef = useRef<HTMLInputElement>(null);

  const executeScroll = () =>
    myRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <>
      <FullPageContainer count={0}>
        <h1 className='text-4xl'>Timeline Title</h1>
        <button className='fixed bottom-12 text-4xl' onClick={executeScroll}>
          <FiChevronsDown />
        </button>
      </FullPageContainer>
      <FullPageContainer count={1}>
        <h1 ref={myRef}>Next Screen</h1>
      </FullPageContainer>
      <FullPageContainer count={2}>
        <h1>Next Next Screen</h1>
      </FullPageContainer>
    </>
  );
};

export default App;
