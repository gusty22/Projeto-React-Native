import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import EsqueciSenha from './src/pages/esqueci-senha';

export default function App() {
  // Estado para controlar a navegação: 'login', 'cadastro' ou 'esqueci-senha'
  const [telaAtual, setTelaAtual] = useState('login');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {telaAtual === 'login' && (
        <Login onNavigate={setTelaAtual} />
      )}

      {telaAtual === 'cadastro' && (
        <Cadastro onNavigate={setTelaAtual} />
      )}

      {telaAtual === 'esqueci-senha' && (
        <EsqueciSenha onNavigate={setTelaAtual} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});