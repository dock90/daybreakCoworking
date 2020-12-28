import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/header'

{/* <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Noto+Sans&display=swap" rel="stylesheet">  */}

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Inconsolata', monospace;


// styles
const Container = styled.div`
  display: grid;
`

const Title = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: 48px;
`

const Home = () => (
  <Container>
    <Head>
      <title>Daybreak Coworking</title>
      <meta name='title' content='Daybreak Coworking' />
      <meta name='description' content='Daybreak Coworking is an upcoming independent coworking space to be located right here in Daybreak.' />
    </Head>
    <Header />
  </Container>
)

export default Home
