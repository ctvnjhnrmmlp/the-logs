import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='icon'
          sizes='192x192'
          href='/public/images/john-rommel-octaviano-logo-one.svg'
        />
        <link
          rel='mask-icon'
          href='/public/images/john-rommel-octaviano-logo-one.svg'
          color=''
        />
        <link rel='author' href='/public/humans.txt'></link>
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
