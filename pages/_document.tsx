import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Import Electrolize font */}
          <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet"></link>
          {/* Other head elements can be added here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
