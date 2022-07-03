import * as React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import type { DocumentContext } from 'next/document'

import siteConfig from '~/site-config'
export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head>
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o+"?href="+window.location.href;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="e472d5ce-e45b-4fe5-bf03-8eceb911906f";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`,
            }}
          /> */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="theme-color" content={siteConfig.themeColor} />
          <meta name="msapplication-TileColor" content={siteConfig.themeColor} />

          <link rel="manifest" href="/manifest.json" />

          <meta content="/mstile-70x70.png" name="msapplication-square70x70" />
          <meta content="/mstile-144x144.png" name="msapplication-square144x144" />
          <meta content="/mstile-150x150.png" name="msapplication-square150x150" />
          <meta content="/mstile-310x150.png" name="msapplication-wide310x150" />
          <meta content="/mstile-310x310.png" name="msapplication-square310x310" />
          <link href="/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
          <link href="/apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
          <link href="/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
          <link href="/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
          <link href="/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
          <link href="/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
          <link href="/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
          <link href="/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
          <link href="/apple-touch-icon-167x167.png" rel="apple-touch-icon" sizes="167x167" />
          <link href="/apple-touch-icon-180x180.png" rel="icon" sizes="180x180" type="image/png" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" /> */}
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: ` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2601458,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          /> */}
        </Head>

        <body>
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
