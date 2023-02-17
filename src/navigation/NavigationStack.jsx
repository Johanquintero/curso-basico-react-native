import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import SettingScreen from "../screen/SettingsScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
