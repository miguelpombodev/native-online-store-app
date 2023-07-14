import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 8px;
  min-width: 170px;
  max-width: 170px;
  margin-right: 5px;
  padding: 0 10px;
`;

export const ProductImage = styled.Image`
  min-height: 150px;
  max-height: 150px;
`;

export const ProductInfoContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
`;

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
`;

export const ProductCategory = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
`;
