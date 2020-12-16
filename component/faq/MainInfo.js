import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { engdata, pldata } from './data';
import { useContext } from 'react';
import { I18nContext } from 'next-i18next';
import { animationOne, animationTwo } from './animations'

function MainInfo() {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  useEffect(() => {
    animationOne('.faq_title', '.colors_desc_info p')
    animationOne('.questions', '.questions')
    animationTwo('.croz', '.questions')
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
