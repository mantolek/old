import React, { useEffect } from 'react';
// import Link from 'next/link';
import { Link } from '../i18n'
import gsap from 'gsap';
import LanguageSwitcher from './LanguageSwitcher'
import { withTranslation } from '../i18n'

const time = gsap.timeline();
function Menu({ t }) {
  useEffect(() => {
    time
      .from(
        '.logo',
        {
          opacity: 0,
          duration: 0.5
        },
        '+=1'
      )
      .from(
        ['.menu_ul', '.flag'],
        {
          opacity: 0,
          duration: 0.5
        },
        '-=0.5'
      )
      .to(
        '.linemenu',
        { width: '100%', ease: 'Power4.easeInOut', duration: 1 },
        '-=.5'
      );
  }, []);

  return (
    <div className='menu' id='menu'>
      {/* Large */}
      <div className='menu_large'>
        <span className='logo'>
          <Link href='/'>Marcin Antol ©</Link>
        </span>
        <ul className='menu_ul'>
          <li data-text='Services'>
            <Link href='/services'>
              <div>
                <div>{t('services')}</div>
                <div>{t('services')}</div>
              </div>
            </Link>
          </li>
          <li data-text='FAQ'>
            <Link href='/faq'>
              <div>
                <div>FAQ</div>
                <div>FAQ </div>
              </div>
            </Link>
          </li>
        </ul>
        <span className='line linemenu'></span>
      </div>
        <LanguageSwitcher />
    </div>
  );
}

export default withTranslation('menu')(Menu);
