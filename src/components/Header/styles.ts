import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  flex-direction: column;
  justify-content: center;
  padding: 0 0 10px;
  width: 100%;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const UserOrderSearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const SearchInputContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  padding: 0 5px;
`;

export const SearchInput = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 5px 10px;
`;

export const Icon = styled(AntDesign).attrs(({ theme }) => ({
  size: 25,
}))`
  padding: 9px 10px;
`;

export const SearchIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE,
  weight: "fill",
}))`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 9px 5px;
`;
