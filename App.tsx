import { Loading } from "@components/Loading";
import {
  useFonts,
  Teko_700Bold,
  Teko_400Regular,
} from "@expo-google-fonts/teko";
import Home from "@screens/Home";
import theme from "@theme/index";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Teko_400Regular, Teko_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
