import { Container, SidebarContainer, ContentContainer } from './styles'
import Sidebar from '../sidebar'
import Header from '../header'
import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  )
}

export default Layout
