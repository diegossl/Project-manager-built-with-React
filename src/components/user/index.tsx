import { Container, Avatar, Info } from './styles'
import { FC } from 'react'

type UserType = {
  user: {
    name: string
    username: string
    avatar: string
  }
}

const User: FC<UserType> = ({ user }) => {
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  )
}

export default User
