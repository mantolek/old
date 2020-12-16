import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const animationOne = (element, triggerElement) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 570vw',
    },
    y: 20,
    opacity: 0,
    ease: 'Power0.easeNone',
    duration: 0.65,
    // delay: 0.5,
  });
};

export const animationTwo = (element, triggerElement) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: triggerElement,
            start: 'top 570vw',
          },
          width: '28vw',
          marginLeft: '-11.5vw',
          ease: 'Power0.easeNone',
          duration: 0.3,
          delay: 0.6,
    });
  };