import { UIEvent, useEffect, useRef, useState } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import BasicTimeline from './components/BasicTimeline/BasicTimeline';
import FullPageContainer from './components/FullPageContainer/FullpageContainer';
import Circle from './components/Circle/Circle';

const App = () => {
  const firstSection = useRef<HTMLInputElement>(null);
  const secondSection = useRef<HTMLInputElement>(null);
  const [showButton, setShowButton] = useState(true);

  const executeScroll = () => {
    setShowButton(false);
    secondSection.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY <= 15) setShowButton(true);
      if (showButton && window.scrollY > 15) setShowButton(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <FullPageContainer>
        <h1 className='text-4xl'>Timeline Title</h1>
        <button
          className={showButton ? 'fixed bottom-12' : 'fixed bottom-12 hidden'}
          onClick={executeScroll}
        >
          <FiChevronsDown className='text-4xl' />
        </button>
      </FullPageContainer>
      <hr />
      <FullPageContainer>
        <h1 ref={firstSection}>Next Screen</h1>
        <div className='absolute block'>
          <BasicTimeline />
        </div>
      </FullPageContainer>
      <hr />
      <FullPageContainer>
        <div ref={secondSection} className='flex flex-col space-y-2'>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        </div>
      </FullPageContainer>
    </div>
  );
};

export default App;
