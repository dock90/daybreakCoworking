import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  justify-content: start;
  background: #f0f0f0;
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
`

const Header = () => (
  <Container>
    <Logo src='/logo.png' />
  </Container>
)

export default Header
