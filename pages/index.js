import React from 'react';
import MainSection from '../component/MainSection';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import About from '../component/About';
import ContactSection from '../component/Contactsection';
import ServiceSection from '../component/ServiceSection';
import SEO from '../component/Seo'
import { withTranslation } from '../i18n'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const fadeIn = {
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

  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={fadeIn}
      className='page1'
    >
      <SEO title='Marcin n Fatih - Website Development' description='Professional and creative website development.'/>
      <MainSection />
      <About />
      <ContactSection />
      <ServiceSection />
    </motion.div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'menu'],
});

export default withTranslation('common')(Home)