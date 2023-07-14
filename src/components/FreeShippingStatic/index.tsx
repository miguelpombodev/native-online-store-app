import { Container, SpanText, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function FreeShippingStatic() {
  return (
    <Container>
      <MaterialIcons name="local-shipping" size={30} />
      <Title>
        <SpanText>Free shipping </SpanText>
        for orders above $200
      </Title>
    </Container>
  );
}
