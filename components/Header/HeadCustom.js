import Head from 'next/head';
import GoogleTagManager from '../GoogleScripts/GoogleTagManager';

// This file is what will be in <head> tag
// This is where you will configure meta tags for SEO
export default () => {

  // add additional meta tags here

  // Google Scripts
  // <script async src="//www.googletagmanager.com/gtag/js?id="></script>
  // <script async='async' src='//www.googletagservices.com/tag/js/gpt.js'></script>
  // <GoogleTagManager scriptId="google-tag-manager" gtmId="" type="script"/>
  return <Head>
          <title>Crinitis Website</title>

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="dc.language" content="en-US" />

         </Head>
}