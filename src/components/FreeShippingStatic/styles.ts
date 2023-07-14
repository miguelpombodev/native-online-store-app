import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.RED};
  border-radius: 6px;
  flex-direction: row;
  margin-top: 10px;
  padding: 5px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
`;

export const SpanText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_BOLD};
`;
