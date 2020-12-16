export const animationOne = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 570vw',
    },
    width: '56vw',
    marginLeft: '-11.5vw',
    ease: 'Power0.easeNone',
    duration: 0.3,
    delay: 0.8,
  });
};

export const animationTwo = (element, triggerElement) => {
  gsap.from(
    element,
    {
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 570vw',
      },
      y: 20,
      opacity: 0,
      ease: 'Power0.easeNone',
      duration: 0.65,
    },
    '+=1'
  );
};

export const animationThree = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top +600vw',
    },
    y: '0%',
    ease: 'Power0.easeNone',
    duration: 0.65,
    stagger: 0.1,
  });
};

export const animationFour = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'bottom +600vw',
    },
    width: '100%',
    ease: 'Power0.easeNone',
    duration: 0.65,
  });
};

export const animationFive = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top +600vw',
    },
    x: '0%',
    opacity: 1,
    ease: 'Power0.easeNone',
    duration: 0.65,
    stagger: 0.1,
  });
};

export const animationSix = (element, triggerElement) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top +600vw',
    },
    x: '0%',
    opacity: 1,
    ease: 'Power0.easeNone',
    duration: 0.65,
    stagger: 0.1,
  });
};

export const animationSeven = (element) => {
  ScrollTrigger.batch(element, {
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeave: (batch) =>
      gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
  });
  ScrollTrigger.addEventListener('refreshInit', () =>
    gsap.set(element, { y: 0 })
  );
};
