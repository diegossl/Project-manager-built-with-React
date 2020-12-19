import RecommendedCard from '../cards/recommended'
import { itens, people } from './data'
import Button from '../button'
import User from '../user'
import { FC } from 'react'
import {
  Container,
  IconsContainer,
  Icon,
  BoxContainer,
  BoxHeader,
  ButtonContainer,
  Item,
  ItemContainer,
  ArrowIcon,
  DownloadImage
} from './styles'

const Suggestion: FC = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/images/facebookIcon.svg"></Icon>
        <Icon src="/images/pinterestIcon.svg"></Icon>
        <Icon src="/images/twitterIcon.svg"></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item key={index}>
              <User user={person}></User>
              <ButtonContainer>
                <Button size={14} outlined>
                  Seguir
                </Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {itens.map((item, index) => (
            <Item key={index}>
              <RecommendedCard recommended={item}></RecommendedCard>
              <ArrowIcon></ArrowIcon>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/images/appstore.png"></DownloadImage>
      <DownloadImage src="/images/playstore.png"></DownloadImage>
      <DownloadImage src="/images/amazon.png"></DownloadImage>
    </Container>
  )
}

export default Suggestion
