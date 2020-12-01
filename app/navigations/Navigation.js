import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PantallaPrincipal from "../screens/PantallaPrincipal";
import Federacion from "../screens/Federacion";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="pantallaPrincipal">
        <Drawer.Screen name="pantallaPrincipal" component={PantallaPrincipal} />
        <Drawer.Screen name="federacion" component={Federacion} />
    </Drawer.Navigator>
);
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
