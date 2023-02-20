import React from "react";
import { Text, Button,SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToPage} />
    </SafeAreaView>
  );
}
