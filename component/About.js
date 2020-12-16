import React, { useEffect, useRef } from 'react';
import { aboutAnimationOne } from '../utils/animations'

function About() {
  useEffect(() => {
    let aboutLeft = document.querySelectorAll('.about_left p');
    let aboutRight = document.querySelectorAll('.about_right p');

    aboutAnimationOne(aboutLeft, '.about_left')
    aboutAnimationOne(aboutRight, '.about_right')
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
