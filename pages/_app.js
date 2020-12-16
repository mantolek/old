import '../styles/styles.scss';
import React, { useEffect } from 'react';
import App from 'next/app';
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion';
import LayoutContainer from '../component/LayoutContainer';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from '../i18n';
import * as gtag from '../lib/gtag';
// NProgress
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  // Google analytics start
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // Google analytics end
  return (
    <>
      <RecoilRoot>
        <LayoutContainer>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </LayoutContainer>
      </RecoilRoot>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
