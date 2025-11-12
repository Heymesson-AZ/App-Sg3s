import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Esta página segue o mesmo layout, mas para "Pedidos"
const  CadastroPedido = ({ navigation }) => {

    const handleNavigateToForm = () => {
        // console.log("Navegar para o formulário de cadastro de pedido");
        // navigation.navigate('FormularioPedido');
    };

    const handleNavigateToConsulta = () => {
        // console.log("Navegar para a consulta de pedidos");
        // navigation.navigate('ConsultaPedidos');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Sistema de Gerenciamento SG3S</Text>
                <Text style={styles.subtitle}>Utilize as opções abaixo para navegar pelo Sistema</Text>

                <View style={styles.buttonContainer}>
                    {/* Botão Cadastrar Pedido (Azul) */}
                    <TouchableOpacity
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={handleNavigateToForm}
                    >
                        <Ionicons name="add-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Cadastrar Pedido</Text>
                    </TouchableOpacity>

                    {/* Botão Consultar Pedido (Cinza) */}
                    <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={handleNavigateToConsulta}
                    >
                        <Ionicons name="document-text-outline" size={24} color="#fff" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Consultar Pedido</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

// Usamos os mesmos estilos do cadastroCliente para manter a consistência
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
        maxWidth: 500,
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

export default CadastroPedido;