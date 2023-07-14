import { useState } from "react";
import SnapCarousel from "react-native-snap-carousel";
import { CarouselImage, CarouselCardItem, Container } from "./styles";
import carouselConfig from "./config";

export function Carousel() {
  const [items, setItems] = useState([
    {
      url: "https://img.freepik.com/premium-photo/close-up-woman-removing-lint_23-2149190412.jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669581.jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/medium-shot-woman-holding-hanger_23-2149190400.jpg",
    },
  ]);

  return (
    <Container>
      <SnapCarousel
        vertical={false}
        data={items}
        renderItem={({ index, item }) => (
          <CarouselCardItem key={index}>
            <CarouselImage source={{ uri: item.url }} />
          </CarouselCardItem>
        )}
        sliderWidth={carouselConfig.SLIDER_WIDTH}
        itemWidth={carouselConfig.ITEM_WIDTH}
        loop
        autoplay={true}
      />
    </Container>
  );
}
