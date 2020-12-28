import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/header'
import Newsletter from '../components/newsletter'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
`

const Body = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 4rem;
  padding: 4rem 2rem;
`

const Intro = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.dark3};
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Signup = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;
`

const FormContainer = styled.div`
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 10px 10px 58px -17px rgba(0,0,0,0.75);
`

const Home = () => (
  <Container>
    <Head>
      <title>Daybreak Coworking</title>
      <meta name='title' content='Daybreak Coworking' />
      <meta name='description' content='Daybreak Coworking is an upcoming independent coworking space to be located right here in Daybreak.' />
    </Head>
    <Header />
    <Body>
      <Intro>
        <h1>We are on a mission to open the first <span>coworking space</span> in Daybreak.</h1>
        <h2>Our goal is to provide a comfortable, flexible and affordable workspace with all the amenities you need so you can focus and have a productive work day.</h2>
      </Intro>
      <Signup>
        <FormContainer>
          <Newsletter />
        </FormContainer>
      </Signup>
    </Body>
  </Container>
)

export default Home
