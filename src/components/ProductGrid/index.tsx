import ProductCard from "@components/ProductCard";
import { Container, List, Title } from "./style";

type Props = {
  title: string;
  data: Array<any>;
};

export default function ProductGrid({ data, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {data.map((_, index) => (
          <ProductCard key={index} />
        ))}
      </List>
    </Container>
  );
}
