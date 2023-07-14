import styled from "styled-components/native";
import carouselConfig from "./config";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CarouselCardItem = styled.View`
  width: ${carouselConfig.ITEM_WIDTH}px;
`;

export const CarouselImage = styled.Image`
  height: 250px;
  border-radius: 8px;
`;
