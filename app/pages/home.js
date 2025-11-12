import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Esta é a tela principal após o login
const Home = ({ navigation }) => {

    // Função para navegar para a tela de Clientes
    const handleNavigateClientes = () => {
        navigation.navigate('CadastroCliente');
    };

    // Função para navegar para a tela de Pedidos
    const handleNavigatePedidos = () => {
        navigation.navigate('CadastroPedido');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Sistema de Gerenciamento SG3S</Text>
                <Text style={styles.subtitle}>Use os Botoes abaixo ou o menu lateral para navegar</Text>

                {/* Container para os botões de navegação principais */}
                <View style={styles.buttonContainer}>

                    {/* Botão Gerenciar Clientes (Azul) */}
                    <TouchableOpacity
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={handleNavigateClientes}
                    >
                        <Ionicons name="people-outline" size={26} color="#fff" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Gerenciar Clientes</Text>
                    </TouchableOpacity>

                    {/* Botão Gerenciar Pedidos (Azul) */}
                    <TouchableOpacity
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={handleNavigatePedidos}
                    >
                        <Ionicons name="cart-outline" size={26} color="#fff" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Gerenciar Pedidos</Text>
                    </TouchableOpacity>
                    
                    {/* Você pode adicionar mais botões aqui (ex: Relatórios, Estoque, etc.) */}

                </View>
            </View>
        </SafeAreaView>
    );
}

// Estilos baseados nas suas outras páginas (cadastroCliente, etc.)
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e6f0fa', // Cor de fundo azul claro
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
        width: '100%',
        maxWidth: 400, // Limita a largura
        alignItems: 'center', // Centraliza os botões
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15, // Botões um pouco maiores na home
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%', // Botões ocupam 90% da largura
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginVertical: 10, // Espaçamento entre os botões
    },
    buttonPrimary: {
        backgroundColor: '#007bff', // Cor Azul
    },
    buttonIcon: {
        marginRight: 12, // Mais espaço para o ícone
    },
    buttonText: {
        color: '#fff',
        fontSize: 18, // Texto um pouco maior
        fontWeight: 'bold',
    },
});

export default Home;