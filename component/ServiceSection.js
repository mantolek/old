import React, { useEffect } from 'react';
// import Link from 'next/link';
import { Link } from '../i18n'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { serviceSectionAnimationOne, serviceSectionAnimationTwo, serviceSectionAnimationThree, serviceSectionAnimationFour } from '../utils/animations'

function ServiceSection() {
  useEffect(() => {
    let servicesectionleft = document.querySelectorAll(
      '.service_left .mark_service p'
    );
    let servicesectionright = document.querySelectorAll(
      '.service_right .mark_service p'
    );
    let servicesectionleft2 = document.querySelectorAll(
      '.service_left2 .mark_service p'
    );

    serviceSectionAnimationOne(servicesectionleft, '.service_left')
    serviceSectionAnimationOne(servicesectionright, '.service_right')
    serviceSectionAnimationOne(servicesectionleft2, '.service_left2')
    serviceSectionAnimationTwo('.down_arrow img', '.down_arrow')
    serviceSectionAnimationThree('.down_arrow', '.down_arrow')
    serviceSectionAnimationFour('.service_title', '.service_title')

  }, []);
  return (
    <div className='serviceSection'>
      <p className='service_title'>SERVICE</p>

      <div className='service_left'>
        <div className='mark_service'>
          <p>
            Everything we do starts with the{' '}
            <span className='color_w_green'>strategy</span>. To achieve the goals, we{' '}
          </p>
        </div>

        <div className='mark_service'>
          <p>ingrain ourselves in your organization, getting to what really</p>
        </div>
        <div className='mark_service'>
          <p>matters by asking the tough questions. We then strategically</p>
        </div>
        <div className='mark_service'>
          <p>
            identify{' '}
            <span className='color_w_green'>
              the right tactics and technologies
            </span>{' '}
            that will deliver on
          </p>
        </div>
        <div className='mark_service'>
          <p>your objectives.</p>
        </div>
      </div>

      <div className='service_right'>
        <div className='mark_service'>
          <p>
            It’s never been more important to{' '}
            <span className='color_w_green'>stand out</span> from the crowd.{' '}
          </p>
        </div>

        <div className='mark_service'>
          <p>Great creative gets to the essence of who you are, why you’re</p>
        </div>
        <div className='mark_service'>
          <p>different, and why customers should care.</p>
        </div>
      </div>

      <div className='service_left2'>
        <div className='mark_service'>
          <p>
            Our offer consist of packages with{' '}
            <span className='color_w_green'>more than 60</span> features which{' '}
          </p>
        </div>

        <div className='mark_service'>
          <p>
            we can implement and adjust accordingly to your needs and ideas.
          </p>
        </div>
      </div>

      {/* --- */}

      <div className='last_part'>
        <img src='./go/1.jpg' alt='random photo' className='service_img' />

        <div className='go_to_services'>
          <Link href='/services'>
            <div>
              <div>CHECK</div>
              <div>CHECK</div>
            </div>
          </Link>
        </div>
        <p className='small_services'>Services</p>

        <div className='down_arrow'>
          <img src='../right-arrow.svg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
