import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { engdata, pldata } from './data';
import { useContext } from 'react';
import { I18nContext } from 'next-i18next';

function MainInfo() {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  useEffect(() => {
    gsap.from('.faq_title', {
      scrollTrigger: {
        trigger: '.colors_desc_info p',
        start: 'top 570vw',
      },
      y: 20,
      opacity: 0,
      ease: 'Power0.easeNone',
      duration: 0.65,
      // delay: 0.5,
    });
    gsap.from('.questions', {
      scrollTrigger: {
        trigger: '.questions',
        start: 'top 570vw',
      },
      y: 20,
      opacity: 0,
      ease: 'Power0.easeNone',
      duration: 0.65,
      // delay: 0.6,
    });
    gsap.to('.croz', {
      scrollTrigger: {
        trigger: '.questions',
        start: 'top 570vw',
      },
      width: '28vw',
      marginLeft: '-11.5vw',
      ease: 'Power0.easeNone',
      duration: 0.3,
      delay: 0.6,
    });
  }, []);
  return (
    <div className='main_info_faq'>
      <div className='faq_title'>
        <p className='faq_title'>
          FAQ <span className='croz'></span>
        </p>
      </div>
      <div className='questions_wrapper'>
        {language === 'en' &&
          engdata.map((el) => {
            return (
              <div className='questions' key={el.q}>
                <div>
                  <p>{el.q}</p>
                  <p><span className='hyfon'>-</span>{' '}{el.a}</p>
                </div>
              </div>
            );
          })}
        {language === 'pl' &&
          pldata.map((el) => {
            return (
              <div className='questions' key={el.q}>
                <div>
                  <p>{el.q}</p>
                  <p><span className='hyfon'>-</span>{' '}{el.a}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MainInfo;
