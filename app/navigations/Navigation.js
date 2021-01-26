import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Pantalla1Stack from "./Pantalla1Stack";
import CursosStack from "./CursosStack";
import CuentaStack from "./CuentaStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="pantalla1"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="pantalla1"
          component={Pantalla1Stack}
          options={{ title: "Principal" }}
        />
        <Tab.Screen
          name="cursos"
          component={CursosStack}
          options={{ title: "Cursos" }}
        />
        <Tab.Screen
          name="cuenta"
          component={CuentaStack}
          options={{ title: "Contacto" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "pantalla1":
      iconName = "compass-outline";
      break;
    case "cursos":
      iconName = "heart-outline";
      break;
    case "cuenta":
      iconName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
