import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, Image, Button, TextInput, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import firebase from '../Firebase';
import { auth } from '../Firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });

    return unsubscribe;
  }, []);

  const AutenticarLogin = () => {
    auth
      .signInWithEmailAndPassword(email, senha)
      .then(userCredential => {
        const user = userCredential.user;
        alert('Logado com Sucesso com o email: ' + user.email);
        navigation.navigate('Home');
      })
      .catch(error => alert('Erro ao inserir: ' + error.message));
  };

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image
          source={require('../assets/toledojr.png')}
          style={styles.image}
        />
      </Card>
      <Text style={styles.titulo}>Tela de Login</Text>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Bem-Vindo!</Text>
        <Text style={styles.text}>Para acesso ao Aplicativo, faça o Login.</Text>
        <Card style={styles.formContainer}>
          <Text style={styles.label}>
            E-mail:
          </Text>
          <TextInput
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Informe seu e-mail."
            value={email}
            label="email"
          />
          <Text style={styles.label}>Informe a senha:</Text>
          <TextInput
            onChangeText={setSenha}
            style={styles.input}
            placeholder="Informe a Senha"
            value={senha}
            label="senha"
            secureTextEntry={true}
          />
          <Button
            mode="contained"
            color="#003761"
            title="Entrar"
            onPress={AutenticarLogin}
          />
        </Card>
        <Card style={styles.cardCadastro}>
          <Text style={styles.textCadastro}>Ainda não tem uma conta?</Text>
          <Button
            mode="contained"
            color="#d58500"
            title="Criar Conta"
            onPress={() => navigation.navigate("Cadastro de Usuário")}
          />
        </Card>
      </Card>
    </ScrollView>
  );
}