import React from 'react';
import MainInfo from '../../component/faq/MainInfo';
import { motion } from 'framer-motion';
import SEO from '../../component/Seo'

function index() {
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
      className='faq'
    >
            <SEO title='Marcin n Fatih - FAQ' description='FAQ. Answers to the most commong questions.'/>
      <MainInfo />
    </motion.div>
  );
}

export default index;
