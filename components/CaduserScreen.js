import React, { useState, useEffect } from 'react';
import { Text, Button, ScrollView, Image, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import { auth } from '../Firebase';

export default function CadastrarScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  const RegistrarUsuario = () => {
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then(userCredential => {
        const user = userCredential.user;
        alert('Registro inserido com sucesso!');
        limparCampos();
      })
      .catch(error => alert('Erro ao inserir: ' + error.message));
  };

  const limparCampos = () => {
    setEmail('');
    setSenha('');
    setCamposPreenchidos(false);
  };

  const verificarCampos = () => {
    setCamposPreenchidos(email.trim() !== '' && senha.trim() !== '');
  };

  useEffect(() => {
    verificarCampos();
  }, [email, senha]);

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image
          source={require('../assets/toledojr.png')}
          style={styles.image}
        />
        <Text style={styles.titulo}>Cadastrar Novo Usuário</Text>
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.label}>
          Informe o e-mail para cadastro:
        </Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Informe o E-mail"
          value={email}
          label="email"
        />
        <Text style={styles.label}>Informe a senha:</Text>
        <TextInput
          onChangeText={(text) => setSenha(text)}
          style={styles.input}
          placeholder="Informe a Senha"
          value={senha}
          label="senha"
          secureTextEntry={true}
        />
        <Button
          mode="contained"
          color="#003761"
          title="Registrar Usuário"
          onPress={RegistrarUsuario}
          disabled={!camposPreenchidos}
        />
      </Card>
    </ScrollView>
  );
}