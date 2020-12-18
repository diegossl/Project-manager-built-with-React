import { Container, Avatar, Info } from './styles'
import { FC } from 'react'

type CardType = {
  recommended: {
    title: string
    avatar: string
    views: string
  }
}

const Card: FC<CardType> = ({ recommended }) => {
  return (
    <Container>
      <Avatar src={recommended.avatar}></Avatar>
      <Info>
        <a>{recommended.title}</a>
        <span>{recommended.views}</span>
      </Info>
    </Container>
  )
}

export default Card
