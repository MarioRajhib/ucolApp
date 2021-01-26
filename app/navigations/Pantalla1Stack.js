import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PantallaPrincipal from '../screens/PantallaPrincipal';

const Stack = createStackNavigator();

export default function Pantalla1Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pantalla1"
        component={PantallaPrincipal}
        options={{ title: "Principal" }}
      />
    </Stack.Navigator>
  );
}
