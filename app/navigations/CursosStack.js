import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cursos from "../screens/Cursos";

const Stack = createStackNavigator();

export default function CursosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cursos"
        component={Cursos}
        options={{ title: "Cursos" }}
      />
    </Stack.Navigator>
  );
}
