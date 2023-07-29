import { useRef, useState } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import FullPageContainer from './components/FullPageContainer/FullpageContainer';

const App = () => {
  const nextSection = useRef<HTMLInputElement>(null);
  const [scrollDown, setScrollDown] = useState(true);

  const executeScroll = () =>
    nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <>
      <FullPageContainer count={0}>
        <h1 className='text-4xl'>Timeline Title</h1>
        <button
          onScroll={() => {
            setScrollDown(false);
          }}
          className={'fixed bottom-12 text-4xl' + (scrollDown ? '' : ' hidden')}
          onClick={executeScroll}
        >
          <FiChevronsDown />
        </button>
      </FullPageContainer>
      <FullPageContainer count={1}>
        <h1 ref={nextSection}>Next Screen</h1>
      </FullPageContainer>
      <FullPageContainer count={2}>
        <h1>Next Next Screen</h1>
      </FullPageContainer>
    </>
  );
};

export default App;
