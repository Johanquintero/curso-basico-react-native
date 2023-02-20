import React from "react";
import { Text, Button,SafeAreaView} from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  }

  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button title="Ir a Home" onPress={() => goToPage("Home")} />
    </SafeAreaView>
  );
}
