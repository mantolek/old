import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: '',
    width: '',
  });

  useEffect(() => {
    // Prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    let handleResize;

    if (dimensions.width.length === 0) {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    } else {
      // Get dimensions every 1 sec
      handleResize = debounce(function () {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }, 1000);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return dimensions;
};
