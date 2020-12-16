import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// PIC
// https://www.google.com/search?q=transparent%20png%20photo&tbm=isch&tbs=rimg:CWxpcQ0qUzrSYSSRTiW4wndA&rlz=1C1CHBF_enPL748PL748&hl=pl&sa=X&ved=0CBwQuIIBahcKEwjw1d2ut4HsAhUAAAAAHQAAAAAQDA&biw=1349&bih=657#imgrc=IGSoNQolZu3lmM&imgdii=L4c6aKaNluAkgM

const time = gsap.timeline();
function MainSection() {
  useEffect(() => {
    let all = document.querySelectorAll('.mark-2 p');
    time
      .from('.p-image', 0.7, {
        x: '0%',
      }, '+=0.5')
      .from(all, 0.6, {
        y: '100%',
        stagger: 0.1,
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
