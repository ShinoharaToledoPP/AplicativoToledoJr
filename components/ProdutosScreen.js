import { Text, FlatList, ScrollView, Image, Alert } from 'react-native';
import { Card, Button, List, Paragraph } from 'react-native-paper';
import { useEffect, useContext } from 'react';
import { DataContext } from '../Context';
import { styles } from './Utils';
import firebase from '../Firebase';
import { valorFormatado } from './Utils';

export default function ProdutosScreen ({ navigation }) {
  const { key, setKey, salvarProduto, setSalvarProduto, nomeComercio, setNomeComercio, nomeCategoria, setNomeCategoria, nomeProduto, setNomeProduto, nomeMarca, setNomeMarca, nomeMedida, setNomeMedida, valorProduto, setValorProduto, dataRegistro, setDataRegistro, camposPreenchidos, setCamposPreenchidos} = useContext(DataContext);

  useEffect(() => {
    selecionarlista();
  }, []);

  const selecionarlista = () => {
    let itens = [];
    firebase
      .database()
      .ref('produtos')
      .orderByChild('nome')
      .on('value', (snapshot) => {
        itens = [];
        snapshot.forEach((linha) => {
          itens.push({
            key: linha.key,
            nomeComercio: linha.val().nomeComercio,
            nomeCategoria: linha.val().nomeCategoria,
            nomeProduto: linha.val().nomeProduto,
            nomeMarca: linha.val().nomeMarca,
            nomeMedida: linha.val().nomeMedida,
            valorProduto: linha.val().valorProduto,
            dataRegistro: linha.val().dataRegistro,
          });
        });
        setSalvarProduto(itens);
      });
  };

  const limparCampos = () => {
    setKey('');
    setNomeComercio('');
    setNomeCategoria('');
    setNomeProduto('');
    setNomeMarca('');
    setNomeMedida('');
    setValorProduto('');
    setDataRegistro('');
  };

  const excluirProduto = (key) => {
    Alert.alert('Excluir Registro', 'Deseja realmente excluir esse Produto?', [
      {
        text: 'sim',
        onPress: () => {
          try {
            firebase.database().ref('produtos').child(key).remove();
            alert('Produto excluído com sucesso');
            limparCampos();
          } catch (e) {
            alert('Erro ao excluir!' + e);
          }
        },
      },
      {
        text: 'Não',
        onPress: () => {
          limparCampos();
        },
      },
    ]);
  };

return (
  <ScrollView style={styles.scrollview}>
    <Card style={styles.card}>
      <Image
        source={require('../assets/toledojr.png')}
        style={styles.image}
      />
      <Text style={styles.titulo}>Lista de Produtos</Text>
    </Card>
    <Card.Content>
      {salvarProduto.length > 0 ? (
        <FlatList
          data={salvarProduto}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <List.Accordion
              title={`${item.nomeProduto} ${item.nomeMedida}`}
              description={`${item.nomeComercio}`}
              left={(props) => <List.Icon {...props} icon="briefcase-search" />}
              titleStyle={styles.itemtitulo}
              descriptionStyle={styles.descricao}
            >
              <List.Item title={`Valor: ${valorFormatado(item.valorProduto)}`} titleStyle={styles.itemText} />
              <List.Item title={`Marca: ${item.nomeMarca}`} titleStyle={styles.itemText} />
              <List.Item title={`Cadastro em ${item.dataRegistro}`} titleStyle={styles.itemText} />
              <Button
                mode="outlined"
                icon="delete"
                theme={{ colors: { primary: '#d58500' } }}
                onPress={() => excluirProduto(item.key)}
              >
                Excluir
              </Button>
            </List.Accordion>
          )}
        />
      ) : (
        <Text style={styles.itemtitulo}>Nenhum Produto Cadastrado!</Text>
      )}
    </Card.Content>
    </ScrollView>
  );
}
