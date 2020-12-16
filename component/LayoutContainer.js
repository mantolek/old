import React, { useEffect, useState } from 'react';
import Intro from './Intro';
import Menu from './Menu';
import Footer from './Footer';
import C from './C';
import SEO from '../component/Seo';

function LayoutContainer({ children }) {
  const [content, setContent] = useState(false);
  return (
    <div className='layout_container smooth-scroll'>
      <SEO
        title='Marcin n Fatih - Website Development'
        description='Professional and creative website development.'
      />
      <div className='background' />
      <C />
      <Intro setContent={setContent} />
      <div className='layout'>
        {content && (
          <>
            <Menu />
            {children}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default LayoutContainer;
