import { useTheme } from "styled-components/native";
import {
  Container,
  LogoContainer,
  Icon,
  SearchInput,
  SearchInputContainer,
  Title,
  UserOrderSearchContainer,
  SearchIcon,
} from "./styles";
import { TouchableOpacity } from "react-native";

export default function Header() {
  const { COLORS } = useTheme();

  return (
    <Container style={{ borderBottomColor: "#000", borderBottomWidth: 1 }}>
      <LogoContainer>
        <Title>LitShade🔥</Title>
      </LogoContainer>
      <UserOrderSearchContainer>
        <SearchInputContainer>
          <SearchIcon name="search1" />
          <SearchInput
            placeholder="Wanna search something?"
            placeholderTextColor={COLORS.WHITE}
          />
        </SearchInputContainer>
        <TouchableOpacity>
          <Icon name="user" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shoppingcart" />
        </TouchableOpacity>
      </UserOrderSearchContainer>
    </Container>
  );
}
