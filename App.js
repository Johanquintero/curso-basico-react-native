import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Saludar firsName="Carlos" lastName="Quintero" />
        <Saludar firsName="Jaime" lastName="Ospina" />
        <Saludar firsName="r" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
