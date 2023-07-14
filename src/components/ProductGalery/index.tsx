import ProductCard from "@components/ProductCard";
import { FlatList } from "react-native";
import { useState } from "react";
import { Container, Title } from "./styles";

type Props = {
  title: string;
  data: Array<any>;
};

export default function ProductGalery({ title, data }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={(item) => <ProductCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
