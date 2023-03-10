import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screen/HomeScreen";
import SettingScreen from "../screen/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
