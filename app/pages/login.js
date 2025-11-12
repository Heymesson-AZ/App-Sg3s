import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// componentes
import InputCPF from '../components/inputCPF';
import InputSenha from '../components/inputSenha';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica para enviar CPF e Senha
    console.log('CPF:', cpf);
    console.log('Senha:', senha);
    alert('Tentando fazer login com CPF: ' + cpf + ' e Senha: ' + senha);
    // Aqui você faria sua chamada de API de login
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
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
            {/* Ícone de usuário para o campo CPF */}
            <Ionicons name="person-outline" size={24} color="#888" style={styles.inputPrefixIcon} />
            <InputCPF
              value={cpf}
              onChangeText={setCpf}
              placeholder="Digite seu usuário (CPF)"
              inputStyle={styles.customInputStyle} // Estilo para o TextInput interno, se precisar
              style={styles.inputNoBorder} // Remove a borda do InputCPF, pois a borda está no container
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          {/* InputSenha já tem seu próprio ícone */}
          <InputSenha
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#3498db', // Cor de fundo azul semelhante à imagem
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
    height: 50, // Altura padrão para o container
  },
  inputPrefixIcon: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  // Sobrescreve o estilo do InputCPF para remover a borda interna
  inputNoBorder: {
    borderWidth: 0, // Remove a borda padrão do InputCPF
    marginBottom: 0, // Remove o margin-bottom padrão
    height: '100%', // Faz o input preencher a altura do container
    borderRadius: 0, // Remove o border-radius padrão
    paddingHorizontal: 0, // Ajusta o padding horizontal
  },
  // Opcional: estilo para o TextInput interno do InputCPF se você precisar
  customInputStyle: {
    // Exemplo: se quisesse mudar a cor do texto ou fonte
    // color: 'blue',
  },
  loginButton: {
    backgroundColor: '#007bff', // Azul do botão
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
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
