import React from 'react';
import { motion } from 'framer-motion';
import ColorsInfo from '../../component/services/ColorsInfo';
import SEO from '../../component/Seo'
import { pageTransition } from '../../utils/animations'

function page2() {
  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageTransition}
      className='page2'
    >
      <SEO title='Marcin n Fatih - Services' description='Services. Green, Blue and Red Package. More than 60 features.'/>
      <ColorsInfo />
    </motion.div>
  );
}

export default page2;
