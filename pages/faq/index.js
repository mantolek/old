import React from 'react';
import MainInfo from '../../component/faq/MainInfo';
import { motion } from 'framer-motion';
import SEO from '../../component/Seo'
import { pageTransition } from '../../utils/animations'

function index() {
  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageTransition}
      className='faq'
    >
            <SEO title='Marcin n Fatih - FAQ' description='FAQ. Answers to the most commong questions.'/>
      <MainInfo />
    </motion.div>
  );
}

export default index;
