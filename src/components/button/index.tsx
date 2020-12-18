import styled from 'styled-components'

type Props = {
  fontSize: boolean
  outlined: string
  theme: { colors: { primary: string } }
}

export default styled.button`
  width: 100%;
  font-size: ${(props: Props) =>
    props.fontSize != null ? `${props.fontSize}px` : '18px'};
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
