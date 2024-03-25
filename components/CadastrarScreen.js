import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, ScrollView, Image, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import { DataContext } from '../Context';
import firebase from '../Firebase';

export default function CadastrarScreen() {
  let { key, setKey } = useContext(DataContext);
  let { salvarProduto, setSalvarProduto } = useContext(DataContext);
  let [nomeComercio, setNomeComercio] = useState('');
  let [nomeCategoria, setNomeCategoria] = useState('');
  let [nomeProduto, setNomeProduto] = useState('');
  let [nomeMarca, setNomeMarca] = useState('');
  let [nomeMedida, setNomeMedida] = useState('');
  let [valorProduto, setValorProduto] = useState('');
  let [dataRegistro, setDataRegistro] = useState('');
  let [camposPreenchidos, setCamposPreenchidos] = useState(false);

  useEffect(() => {
    selecionarTodos();
  }, []);

  const selecionarTodos = () => {
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
    setCamposPreenchidos(false);
  };

  const verificarRepetido = () => {
    const produtoExistenteContexto = salvarProduto.find(
      (produto) =>
        produto.nomeProduto === nomeProduto &&
        produto.nomeComercio === nomeComercio
    );
    if (produtoExistenteContexto) {
      alert('Este produto já foi cadastrado para este estabelecimento.');
      limparCampos();
      return true;
    }
    return false;
  };

  const registrarProduto = () => {
    if (
      nomeComercio !== '' &&
      nomeCategoria !== '' &&
      nomeProduto !== '' &&
      nomeMarca !== '' &&
      nomeMedida !== '' &&
      valorProduto !== ''
    ) {
      if (!verificarRepetido()) {
        try {
          const novoProdutoKey = firebase.database().ref('produtos').push().key;
          firebase.database().ref('produtos').child(novoProdutoKey).set({
            nomeComercio: nomeComercio,
            nomeCategoria: nomeCategoria,
            nomeProduto: nomeProduto,
            nomeMarca: nomeMarca,
            nomeMedida: nomeMedida,
            valorProduto: valorProduto,
            dataRegistro: new Date().toLocaleString(),
          });

          const novoProduto = {
            key: novoProdutoKey,
            nomeComercio: nomeComercio,
            nomeCategoria: nomeCategoria,
            nomeProduto: nomeProduto,
            nomeMarca: nomeMarca,
            nomeMedida: nomeMedida,
            valorProduto: valorProduto,
            dataRegistro: new Date().toLocaleString(),
          };

          setSalvarProduto([...salvarProduto, novoProduto]);
          alert('Registro inserido com sucesso!');
          limparCampos();
        } catch (error) {
          alert('Erro ao inserir!' + error);
        }
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const verificarCampos = () => {
    if (
      nomeComercio.trim() !== '' &&
      nomeCategoria.trim() !== '' &&
      nomeProduto.trim() !== '' &&
      nomeMarca.trim() !== '' &&
      nomeMedida.trim() !== '' &&
      valorProduto.trim() !== ''
    ) {
      setCamposPreenchidos(true);
    } else {
      setCamposPreenchidos(false);
    }
  };

  useEffect(() => {
    verificarCampos();
  }, [nomeComercio, nomeCategoria, nomeMarca, nomeMedida, valorProduto]);

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image
          source={require('../assets/toledojr.png')}
          style={styles.image}
        />
        <Text style={styles.titulo}>Cadastrar Produtos</Text>
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.label}>
          Informe o nome do estabelecimento comercial:
        </Text>
        <TextInput
          onChangeText={setNomeComercio}
          style={styles.input}
          placeholder="Informe o Comércio"
          value={nomeComercio}
          label="nomeComercio"
        />
        <Text style={styles.label}>Informe a categoria do produto:</Text>
        <TextInput
          onChangeText={setNomeCategoria}
          style={styles.input}
          placeholder="Informe a Categoria"
          value={nomeCategoria}
          label="nomeCategoria"
        />
        <Text style={styles.label}>Informe o nome do produto:</Text>
        <TextInput
          onChangeText={setNomeProduto}
          style={styles.input}
          placeholder="Informe o Produto"
          value={nomeProduto}
          label="nomeProduto"
        />
        <Text style={styles.label}>Informe a marca do produto:</Text>
        <TextInput
          onChangeText={setNomeMarca}
          style={styles.input}
          placeholder="Informe a Marca"
          value={nomeMarca}
          label="nomeMarca"
        />
        <Text style={styles.label}>Informe a unidade de medida:</Text>
        <TextInput
          onChangeText={setNomeMedida}
          style={styles.input}
          placeholder="Informe a Unidade de Medida"
          value={nomeMedida}
          label="nomeMedida"
        />
        <Text style={styles.label}>Informe o valor do produto:</Text>
        <TextInput
          onChangeText={setValorProduto}
          style={styles.input}
          placeholder="Informe o Valor"
          value={valorProduto}
          label="valorProduto"
        />
        <Button
          mode="contained"
          color="#003761"
          title="Registrar Produto"
          onPress={() => registrarProduto()}
          disabled={!camposPreenchidos}
        />
      </Card>
    </ScrollView>
  );
}
