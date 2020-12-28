import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
// css
import '../components/newsletter.css'

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Inconsolata', monospace;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Noto Sans', sans-serif;
    font-size: 48px;
  }

  h2 {
    font-family: 'Inconsolata', monospace;
    font-size: 32px;
    line-height: 2.5rem;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }
`

const theme = {
  colors: {
    primary: '#dba111',
    secondary: '#90beab',
    background: '#f0f0f0',
    dark1: '#1a1a1a',
    dark2: '#333333',
    dark3: '#4d4d4d',
    dark4: '#666666',
    dark5: '#808080',
    dark6: '#999999',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Noto+Sans&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
