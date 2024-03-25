import { ScrollView, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image
          source={require('../assets/toledojr.png')}
          style={styles.image}
        />
      </Card>
      <Text style={styles.titulo}>Índice de Preços Toledo</Text>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Cadastrar Produtos</Text>
        <Text style={styles.text}>Área para cadastrar novos produtos</Text>
        <Card.Content>
          <Image
            source={require('../assets/cadastrar.jpg')}
            style={styles.image}
          />
        </Card.Content>
        <Button
          mode="contained"
          color="#d58500"
          title="Cadastrar"
          onPress={() => navigation.navigate('Cadastrar')}
        />
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Listas de Produtos</Text>
        <Text style={styles.text}>
          Área para para ver a lista de produtos cadastrados
        </Text>
        <Card.Content>
          <Image
            source={require('../assets/produtos.jpg')}
            style={styles.image}
          />
        </Card.Content>
        <Button
          mode="contained"
          color="#d58500"
          title="Lista de Produtos"
          onPress={() => navigation.navigate('Lista de Produtos')}
        />
      </Card>
    </ScrollView>
  );
}