import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CadastrarScreen from './components/CadastrarScreen';
import ProdutosScreen from './components/ProdutosScreen';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import LogoutScreen from './components/LogoutScreen';
import CaduserScreen from './components/CaduserScreen';
import Context from './Context';
import { styles } from './components/Utils';
import firebase from './Firebase';

const Drawer = createDrawerNavigator();

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAutenticado(true);
      } else {
        setAutenticado(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.containersafe}>
      <Context autenticado={autenticado} setAutenticado={setAutenticado}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName={autenticado ? "Home" : "Login"}>
            {autenticado ? (
              <>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Cadastrar" component={CadastrarScreen} />
                <Drawer.Screen name="Lista de Produtos" component={ProdutosScreen} />
                <Drawer.Screen name="Logout" component={LogoutScreen} />
              </>
            ) : (
              <>
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Cadastro de Usuário" component={CaduserScreen} />
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </Context>
    </SafeAreaView>    
  );
}
