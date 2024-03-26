import { ScrollView, Text, Image, Button, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { auth } from '../Firebase';
import { styles } from './Utils';

const LogoutScreen = () => {

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        alert('Logout efetuado com sucesso!');
      })
      .catch(error => Alert.alert(error.message));
  };

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image
          source={require('../assets/toledojr.png')}
          style={styles.image}
        />
      </Card>
      <Text style={styles.titulo}>Tela de Logout</Text>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Gostaria de Deslogar?</Text>
        <Text style={styles.text}>Para deslogar, clique no botão abaixo.</Text>
        <Button
          mode="contained"
          color="#003761"
          title="Deslogar"
          onPress={logout}
        />
      </Card>
    </ScrollView>
  );
};

export default LogoutScreen;