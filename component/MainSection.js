import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const time = gsap.timeline();
function MainSection() {
  useEffect(() => {
    let all = document.querySelectorAll('.mark-2 p');
    time
      .from('.p-image', {
        x: '0%',
        duration: '0.7'
      }, '+=0.5')
      .from(all, {
        y: '100%',
        stagger: 0.1,
        duration: '0.6'
      });
  }, []);

  return (
    <div className='mainsection'>
      <div className='mainsection_left'>
        <div className='mark-2'>
          <p>UX+UI</p>
        </div>
        <div className='mark-2'>
          <p>DESIGN</p>
        </div>
        <div className='mark-2'>
          <p>GRAPHICS</p>
        </div>
        <div className='mark-2'>
          <p>INTERACTIONS</p>
        </div>
      </div>
      <div className='mainsection_right'>
        <div className='cover'></div>  
        <img className='p-image' src='./go/girl1.png' alt='girl photo' data-speed='.25' />
      </div>
    </div>
  );
}

export default MainSection;
