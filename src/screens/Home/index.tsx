import Header from "@components/Header";
import { Container } from "./styles";
import Categories from "@components/Categories";
import { Carousel } from "@components/Carousel";
import FreeShippingStatic from "@components/FreeShippingStatic";
import ProductGalery from "@components/ProductGalery";
import { ScrollView } from "react-native";
import ProductGrid from "@components/ProductGrid";

export default function Home() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Categories />
        <Carousel />
        <FreeShippingStatic />
        <ProductGalery
          data={["a", "b", "c", "d", "e", "f"]}
          title="Most buyed"
        />
        <ProductGrid
          data={["a", "b", "c", "d", "e", "f"]}
          title="You might like'em"
        />
      </ScrollView>
    </Container>
  );
}
