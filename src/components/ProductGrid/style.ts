import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;

  margin-bottom: 10px;
  margin-top: 30px;
`;
