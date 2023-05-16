import { Container } from './styles';

export function Footer(props) {
  return (
    <Container>
      <text>{props.children}</text>
    </Container>
  )
}