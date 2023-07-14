import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

import Home from "@screens/Home";

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            tabBarHideOnKeyboard: true,
            tabBarIcon: () => {
              return <MaterialIcons name="home" size={36} />;
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
