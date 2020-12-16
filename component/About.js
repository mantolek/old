import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    let aboutLeft = document.querySelectorAll('.about_left p');
    gsap.to(aboutLeft, {
      scrollTrigger: {
        trigger: '.about_left',
        start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.55,
    });

    let aboutRight = document.querySelectorAll('.about_right p');
    gsap.to(aboutRight, {
      scrollTrigger: {
        trigger: '.about_right',
        start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.55,
    });
  }, []);
  return (
    <div className='about'>
      <div className='about_left'>
        <div className='mark_about'>
          <p>The right touch, in the right place, at the right moment</p>
        </div>

        <div className='mark_about'>
          <p>
            Not too much, not too little. Just beautiful. Inspired by aesthetics
            and
          </p>
        </div>
        <div className='mark_about'>
          <p>
            driven by excellence. Forever building the right team to produce
          </p>
        </div>
        <div className='mark_about'>
          <p>
            <span className='color_w_green'>the best</span> creations.
          </p>
        </div>
      </div>

      <div className='about_right'>
        <div className='mark_about'>
          <p>Often sumptuous, sometimes quirky, always spot</p>
        </div>
        <div className='mark_about'>
          <p>on. A women’s touch is always her own. Hand-in-hand,</p>
        </div>
        <div className='mark_about'>
          <p>
            side by side,{' '}
            <span className='color_w_green'>Working with you today</span> to
            make
          </p>
        </div>
        <div className='mark_about'>
          <p>tomorrow beautiful.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
