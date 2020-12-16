import React from 'react';
import MainSection from '../component/MainSection';
import { motion } from 'framer-motion';
import About from '../component/About';
import ContactSection from '../component/Contactsection';
import ServiceSection from '../component/ServiceSection';
import SEO from '../component/Seo';
import { withTranslation } from '../i18n';
import { pageTransition } from '../utils/animations';

function Home() {
  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageTransition}
      className='page1'
    >
      <SEO
        title='Marcin n Fatih - Website Development'
        description='Professional and creative website development.'
      />
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

export default withTranslation('common')(Home);
