import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CadastrarScreen from './components/CadastrarScreen';
import ProdutosScreen from './components/ProdutosScreen';
import HomeScreen from './components/HomeScreen';
import Context from './Context';
import { styles } from './components/Utils';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.containersafe}>
      <Context>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Cadastrar" component={CadastrarScreen} />
            <Drawer.Screen name="Lista de Produtos" component={ProdutosScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Context>
    </SafeAreaView>    
  );
}
