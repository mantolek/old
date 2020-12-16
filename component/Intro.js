import React, { useEffect } from 'react';
import gsap from 'gsap';

const time = gsap.timeline();
function Intro({setContent}) {
  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    let names = Array.from(document.querySelectorAll('.name'));

      time
        .to(names, 1, {
          y: 0,
          ease: 'Power3.easeInOut',
          stagger: 0.1,
        })
        .to(names.reverse(), 1, {
          y: '4rem',
          ease: 'Power3.easeInOut',
          stagger: 0.1,
          delay: 0.5,
        })
        .to('.intro', .3, {
          opacity: 0,
          zIndex: 0
        }, '-=0.7')
        .from('.layout', .1, {
            autoAlpha : 0,
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
