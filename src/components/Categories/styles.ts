import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Category = styled(TouchableOpacity)`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
`;
