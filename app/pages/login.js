import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert, // Importar Alert
  ActivityIndicator, // Importar ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // Importar axios

import InputCPF from '../components/inputCPF';
import InputSenha from '../components/inputSenha';

// URL da sua API de Login
const API_URL = 'https://sg3s.tds104-senac.online/api_app/apiLogin.php';

export default function Login({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  // Estado para controlar o loading
  const [loading, setLoading] = useState(false);

  // Converte a função para async para usar o axios
  const handleLogin = async () => {
    if (loading) return; // Impede cliques múltiplos

    // Validação simples (pode melhorar)
    if (!cpf || !senha) {
      Alert.alert('Erro', 'Por favor, preencha o CPF e a senha.');
      return;
    }

    setLoading(true); // Inicia o loading

    // FormData é um formato comum que APIs PHP entendem
    const formData = new FormData();
    formData.append('cpf', cpf);
    formData.append('senha', senha);

    try {
      // Faz a chamada POST para a API
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Verifica a resposta da API
      if (response.data && response.data.status === 'sucesso') {
        // Sucesso!
        console.log('Login bem-sucedido:', response.data);

        // Navega para a Home (e remove o Login da pilha)
        navigation.replace('Home');

      } else {
        // Erro vindo da API (ex: CPF/Senha errados)
        Alert.alert('Erro de Login', response.data.mensagem || 'CPF ou senha inválidos.');
      }

    } catch (error) {
      Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor. Tente novamente.');
    } finally {
      // Para o loading, independente de sucesso ou erro
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <Image
            source={require('../../assets/image/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>SG3S - Sistema de Gerenciamento</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Usuário</Text>
          <View style={styles.inputIconContainer}>
            <Ionicons name="person-outline" size={24} color="#888" style={styles.inputPrefixIcon} />
            <InputCPF
              value={cpf}
              onChangeText={setCpf}
              placeholder="Digite seu usuário (CPF)"
              style={styles.inputNoBorder}
              editable={!loading} // Desativa input durante o loading
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          <InputSenha
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            autoCapitalize="none"
            editable={!loading} // Desativa input durante o loading
          />

          {/* Botão de Login com indicador de loading */}
          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={loading} // Desativa o botão durante o loading
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Entrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
    fontWeight: '500',
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    height: 50,
  },
  inputPrefixIcon: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  inputNoBorder: {
    flex: 1,
    height: '100%',
    borderWidth: 0,
    marginBottom: 0,
    borderRadius: 0,
    paddingHorizontal: 0,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    height: 50, // Altura fixa para o botão
    justifyContent: 'center', // Centraliza o ActivityIndicator
  },
  // Estilo para o botão quando estiver carregando
  loginButtonDisabled: {
    backgroundColor: '#0056b3', // Um azul um pouco mais escuro/opaco
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
});