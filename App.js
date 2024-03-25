import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CadastrarScreen from './components/CadastrarScreen';
import ProdutosScreen from './components/ProdutosScreen';
import Context from './Context';
import { styles } from './components/Utils';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.containersafe}>
      <Context>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                if (route.name === 'Cadastrar') {
                  return <Ionicons name='bag-add' size={size} color={color} />;
                } else if (route.name === 'Produtos') {
                  return <Ionicons name='book-outline' size={size} color={color} />;
                }
              },
              tabBarInactiveTintColor: 'gray',
              tabBarActiveTintColor: 'dodgerblue',
            })}>
            <Tab.Screen name="Cadastrar" component={CadastrarScreen} />
            <Tab.Screen name="Produtos" component={ProdutosScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Context>
    </SafeAreaView>    
  );
}
