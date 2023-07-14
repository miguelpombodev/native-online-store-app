import {
  Container,
  Price,
  ProductCategory,
  ProductImage,
  ProductInfoContainer,
  ProductName,
} from "./styles";

export default function ProductCard() {
  return (
    <Container>
      <ProductImage
        source={{
          uri: "https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/43/NQQ-6923-543/NQQ-6923-543_zoom4.jpg?ts=1616143211&",
        }}
      />
      <ProductInfoContainer>
        <Price>R$239,00</Price>
        <ProductName>
          Tênis Adidas Runfalcon 2.0 Masculino - Azul Royal+Branco
        </ProductName>
        <ProductCategory>Tênis Masculino</ProductCategory>
      </ProductInfoContainer>
    </Container>
  );
}
