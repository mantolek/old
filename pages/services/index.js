import React from 'react';
import { motion } from 'framer-motion';
import ColorsInfo from '../../component/services/ColorsInfo';
import SEO from '../../component/Seo'


function page2() {
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
      className='page2'
    >
      <SEO title='Marcin n Fatih - Services' description='Services. Green, Blue and Red Package. More than 60 features.'/>
      <ColorsInfo />
    </motion.div>
  );
}

export default page2;
