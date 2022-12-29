import { useEffect, useState } from 'react';

const useCheckMobileScreen = (breakpoint = 800): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= breakpoint;
};

export default useCheckMobileScreen;
