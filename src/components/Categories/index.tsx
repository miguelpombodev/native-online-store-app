import { useState } from "react";
import { Container, Title, Category } from "./styles";
import { FlatList } from "react-native";

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([
    "Women",
    "Man",
    "Kids",
    "Sports",
    "Beauty",
  ]);

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category>
            <Title>{item}</Title>
          </Category>
        )}
      />
    </Container>
  );
}
