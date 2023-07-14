import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;

  margin-bottom: 10px;
`;
