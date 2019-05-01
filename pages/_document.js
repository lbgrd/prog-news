import Document, { Head, Main, NextScript } from 'next/document';

export default class myDocument extends Document {
  render() {
    return (
        <html lang="en-US">
        <Head>
        <link rel="manifest" href="/static/manifest.json"/>

        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="application-name" content="prog-news"/>
        <meta name="apple-mobile-web-app-title" content="prog-news"/>
        <meta name="theme-color" content="#f60"/>
        <meta name="msapplication-navbutton-color" content="#f60"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="msapplication-starturl" content="/"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png"/>
        <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png"/>
        <link rel="icon" type="image/png" sizes="128x128" href="/static/icons/icon-128x128.png"/>
        <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/static/icons/icon-128x128.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
        </html>)}}
