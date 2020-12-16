import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const pageTransition = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: '-1%',
    transition: { duration: 0.2 },
  },
};

export const serviceSectionAnimationOne = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
    },
    y: '0%',
    ease: 'Power0.easeNone',
    stagger: 0.1,
    duration: 0.55,
  });
};

export const serviceSectionAnimationTwo = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
    },
    x: '0%',
    ease: 'Power0.easeNone',
    duration: 0.1,
  });
};

export const serviceSectionAnimationThree = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      scrub: true,
      toggleActions: 'restart pause reverse pause',
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
    },
    rotate: '360deg',
    ease: 'Power0.easeNone',
    duration: 0.3,
  });
};

export const serviceSectionAnimationFour = (element, triggerElement) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
    },
    y: 20,
    ease: 'Power0.easeNone',
    duration: 0.3,
  });
};

export const contactSectionAnimationOne = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
    },
    y: '0%',
    ease: 'Power0.easeNone',
    stagger: 0.1,
    duration: 0.55,
  });
};

export const contactSectionAnimationTwo = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +620vw',
    },
    x: '0%',
    ease: 'Power0.easeNone',
    stagger: 0.1,
    duration: 0.55,
  });
};

export const contactSectionAnimationThree = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      scrub: true,
      toggleActions: 'restart pause reverse pause',
      trigger: triggerElement,
      start: window.innerWidth < 400 ? 'center +300px' : 'top +700vw',
    },
    scale: 1,
    ease: 'Power0.easeNone',
    duration: 0.1,
  });
};

export const contactSectionAnimationFour = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top +700vw',
    },
    width: '100%',
    ease: 'Power4.easeInOut',
    duration: 1,
  });
};

export const aboutAnimationOne = (element, triggerElement) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: triggerElement,
            start: window.innerWidth < 400 ? 'center +300px' : 'top +600vw',
          },
          y: '0%',
          ease: 'Power0.easeNone',
          stagger: 0.1,
          duration: 0.55,
    });
  };
  