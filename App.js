import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

// telas do app
import Home from "./app/pages/home";
import Login from "./app/pages/login";
import CadastroPedido from "./app/pages/cadastroPedido";
import CadastroCliente from "./app/pages/cadastroCliente";

//  criando o drawer navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Login"
            component={Login}
          />
          <Drawer.Screen
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            name="CadastroPedido"
            component={CadastroPedido}
          />
          <Drawer.Screen
            name="CadastroCliente"
            component={CadastroCliente}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
