import styled from 'styled-components'

type Props = {
  size: number
  outlined: boolean
  theme: { colors: { primary: string } }
}

const Button = styled.button<Props>`
  width: 100%;
  font-size: ${(props: Props) =>
    props.size != null ? `${props.size}px` : '18px'};
  font-weight: 700;
  height: 100%;
  background-color: ${(props: Props) => props.theme.colors.primary};
  border: none;
  background: ${(props: Props) =>
    props.outlined ? '#FFF' : props.theme.colors.primary};
  border: ${(props: Props) =>
    props.outlined ? `1px solid ${props.theme.colors.primary}` : 'none'};
  color: ${(props: Props) =>
    props.outlined ? props.theme.colors.primary : '#FFF'};
  cursor: pointer;
  :hover {
    background: ${(props: Props) =>
      props.outlined ? 'rgba(22,24,35,0.03)' : props.theme.colors.primary};
  }
`

export default Button
