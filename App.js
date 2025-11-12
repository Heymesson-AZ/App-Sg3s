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

//  criando o drawer navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Por padrão, a primeira tela (Login) é a tela inicial.
          Vamos adicionar 'options' para customizar o comportamento dela.
        */}
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              // 1. Esconde o "hamburger" menu e a barra de título na tela de Login
              headerShown: false,
              // 2. Desativa o gesto de "arrastar para abrir" na tela de Login
              swipeEnabled: false,
              // 3. Esconde o item "Login" da lista do menu lateral
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            name="CadastroPedido"
            component={CadastroPedido}
            options={{ title: 'Cadastrar Pedido' }} // Título mais amigável
          />
          <Drawer.Screen
            name="CadastroCliente"
            component={CadastroCliente}
            options={{ title: 'Cadastrar Cliente' }} // Título mais amigável
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