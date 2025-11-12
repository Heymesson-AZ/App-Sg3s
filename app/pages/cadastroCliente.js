import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Esta é a página que corresponde à sua imagem de exemplo
const CadastroCliente = ({ navigation }) => {

  const handleNavigateToForm = () => {
    // Vamos navegar para uma futura tela de formulário
    // console.log("Navegar para o formulário de cadastro de cliente");
    // navigation.navigate('FormularioCliente'); 
  };

  const handleNavigateToConsulta = () => {
    // Vamos navegar para uma futura tela de consulta
    // console.log("Navegar para a consulta de clientes");
    // navigation.navigate('ConsultaClientes');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sistema de Gerenciamento SG3S</Text>
        <Text style={styles.subtitle}>Utilize as opções abaixo para navegar pelo Sistema</Text>

        <View style={styles.buttonContainer}>
          {/* Botão Cadastrar Cliente (Azul) */}
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={handleNavigateToForm}
          >
            <Ionicons name="add-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Cadastrar Cliente</Text>
          </TouchableOpacity>

          {/* Botão Consultar Cliente (Cinza) */}
          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={handleNavigateToConsulta}
          >
            <Ionicons name="document-text-outline" size={24} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Consultar Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e6f0fa', // Cor de fundo azul claro da imagem
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 500, // Limita a largura máxima dos botões em telas maiores
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 10,
  },
  buttonPrimary: {
    backgroundColor: '#007bff', // Cor Azul
  },
  buttonSecondary: {
    backgroundColor: '#6c757d', // Cor Cinza
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroCliente;