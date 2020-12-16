import React, { useEffect } from 'react';
import gsap from 'gsap';

const time = gsap.timeline();
function Intro({setContent}) {
  useEffect(() => {
    gsap.to('body', { css: { visibility: 'visible' }, duration: 0 });
    let names = Array.from(document.querySelectorAll('.name'));

      time
        .to(names, {
          y: 0,
          ease: 'Power3.easeInOut',
          stagger: 0.1,
          duration: 1,
        })
        .to(names.reverse(), {
          y: '4rem',
          ease: 'Power3.easeInOut',
          stagger: 0.1,
          delay: 0.5,
          duration: 1,
        })
        .to('.intro', {
          opacity: 0,
          zIndex: 0,
          duration: .3
        }, '-=0.7')
        .from('.layout', {
            autoAlpha : 0,
            duration: .1,
            onComplete: () => {
                setContent(true),
                document.querySelector('.layout_container').removeChild(document.querySelector('.intro'))
              },
        })
    
  }, []);
  return (
    <div className='intro'>
      <div className='name_container'>
        <div className='mark'>
          <p className='name'>Marcin Antol</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
