import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { withTranslation } from '../i18n'

function Footer({ t }) {
  useEffect(() => {
    gsap.to('.linefooter', {
      scrollTrigger: {
        trigger: '.linefooter',
        start: 'top +700vw',
      },
      width: '100%',
      ease: 'Power4.easeInOut',
      duration: 1,
    });
  }, [])
  return (
    <div className='footer'>
      <div className='line linefooter'></div>
      <div className='footer_wrapper'>
        <div>
          <a href='#menu'>{t('backToTop')}</a>
        </div>
        <ul>
          <li>
            <a href='mailto:0marcinantol@gmail.com'>MAIL</a>
          </li>
          <li>
            <a target='_blank' href='https://www.linkedin.com/in/marcin-antol/'>
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://www.instagram.com/half_way_and_one_step_forward/'
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withTranslation('footer')(Footer)
