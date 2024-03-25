import {StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'white',
  },
  containersafe: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: Dimensions.get('window').width - 30,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#003761',
  },
  titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    color: '#003761',
  },
  formContainer: {
    marginBottom: 25,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d58500',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    color: '#003761',
    marginBottom: 5,
  },
  text: {
    color: '#003761',
    marginBottom: 5,
    alignSelf: 'center',
  },
  card: {
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#003761',
  },
  itemtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#d58500',
  },
  descricao: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#d58500',
  }
});

export const valorFormatado = (valor) => {
  return `R$ ${parseFloat(valor).toFixed(2)}`;
};
