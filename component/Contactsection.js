import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  useEffect(() => {
    let contacts = document.querySelectorAll('.contact_method li div');
    gsap.to(contacts, {
      scrollTrigger: {
        trigger: '.contact_method',
        start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.55,
    });

    let contactside = document.querySelectorAll('.details div p');
    gsap.to(contactside, {
      scrollTrigger: {
        trigger: '.contact_method',
        start: window.innerWidth < 400 ? 'center +300px' : 'top +620vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.55,
    });

    gsap.to(['.right_arrow img'], {
      scrollTrigger: {
        trigger: '.contact_method',
        start: window.innerWidth < 400 ? 'center +300px' : 'top +620vw',
      },
      x: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.55,
    });

    gsap.to('.circle', {
      scrollTrigger: {
        scrub: true, // povoduje przod tyl animacji
        toggleActions: 'restart pause reverse pause',
        trigger: '.circle',
        start: window.innerWidth < 400 ? 'center +300px' : 'top +700vw',
        // markers: true,
      },
      scale: 1,
      ease: 'Power0.easeNone',
      duration: 0.1,
    });

    gsap.to('.linecontact', {
      scrollTrigger: {
        trigger: '.linecontact',
        start: 'top +700vw',
      },
      width: '100%',
      ease: 'Power4.easeInOut',
      duration: 1,
    });
  }, []);
  return (
    <div className='contactSection'>
      <div className='details'>
        <div>
          <p>Contact</p>
        </div>
        <div>
          <p>Details</p>
        </div>
      </div>

      <div className='right_arrow'>
        <img src='../right-arrow.svg' alt='' />
      </div>

      <ul className='contact_method'>
        <li>
          <div>
            <p>
              <a href='mailto:0marcinantol@gmail.com'>Mail</a>
            </p>
            <p>
              <a href='mailto:0marcinantol@gmail.com'>Mail</a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/marcin-antol/'
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/marcin-antol/'
              >
                LinkedIn
              </a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>
              <a
                target='_blank'
                href='https://www.instagram.com/half_way_and_one_step_forward/'
              >
                Instagram
              </a>
            </p>

            <p>
              {' '}
              <a
                target='_blank'
                href='https://www.instagram.com/half_way_and_one_step_forward/'
              >
                Instagram
              </a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>Phone</p>
            <p className='color_w_red'>+48514088872</p>
          </div>
        </li>
      </ul>
      <span className='line linecontact'></span>
      <span className='circle'></span>
    </div>
  );
}

export default ContactSection;
